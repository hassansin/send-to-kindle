'use latest';
//hyperurl.co/to-kindle?url=url
import nodemailer from 'nodemailer@2.5.0';
import request from 'request@2.81.0';
import Url from 'url';

module.exports = function(context, cb) {
  const url = context.query.url;
  const title = context.query.title;

  if (!url) {
    return cb(null, "missing url parameter");
  }
  if (!context.secrets.PDFLAYER_APIKEY) {
    return cb(null, 'missing PDFLAYER_APIKEY');
  }
  if (!context.secrets.SMTP_CONFIG) {
    return cb(null, 'missing SMTP_CONFIG');
  }
  if (!context.secrets.KINDLE_ADDRESS) {
    return cb(null, 'missing KINDLE_ADDRESS');
  }
  
  return prepareAttachments(context, [{url, title}])
    .then(attachments => sendToKindle(context, attachments))
    .then(info => cb(null, info))
    .catch(cb);
};


function prepareAttachments(context, urls) {
  return Promise.all(
    urls.map(url => prepareAttachment(context, url))  
  );
}


function prepareAttachment(context, {url, title}) {
  return fetchContent(url)
    .then(({res, body}) => {
      if (title && title.indexOf('.pdf') === -1) {
        title += '.pdf';
      }
      switch(res.headers['content-type']) {
        case 'application/pdf':
          title = title || url.replace(/\/\?.*/,'').split('/').pop();
          return Promise.resolve(body);
        default:
          if (!title){
            const matches = body.toString().match(/title>([\s\S]*?)<\/title/i);
            title = matches? `${matches[1]}.pdf` : 'document.pdf';
            title = title.replace(/\s+/g, '-').replace(/[-]+/g, '-');            
          }
          return htmlToPDF(context, url);
      }
    })
    .then(content => ({filename: title, content}));
}
function fetchContent(url){
  return new Promise((resolve, reject)=>{
    console.log('fetching url', url);
    request({
      url,
      headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36',
      },
      encoding: null,
    }, (err, res, body) => {
      if (err || res.statusCode !== 200) {
        return reject(err || new Error(`invalide status ${res.statusCode}`));
      }
      return resolve({
        res,body
      });
    });    
  });
}

/**
* sends attachments to kindle address
*/
function sendToKindle(context, attachments){
  return new Promise((resolve, reject)=>{
    var transporter = nodemailer.createTransport(context.secrets.SMTP_CONFIG);
    var mailOptions = {
        to: context.secrets.KINDLE_ADDRESS,
        text: 'document',
        subject: 'document',
        attachments
    };
    console.log('sending to kindle');
    transporter.sendMail(mailOptions, (err, info)=> {
      if(err){
        return reject(err);
      }
      info.attachments = attachments.map(att => att.filename);
      return resolve(info);
    });
  });
}

/**
* converts any url to pdf using pdflayer.com
*/
function htmlToPDF(context, source){
  let url = `http://api.pdflayer.com/api/convert?access_key=${context.secrets.PDFLAYER_APIKEY}&document_url=${source}&margin_top=0&margin_bottom=0&margin_left=0&margin_right=0&use_print_media=1`;
  if (context.secrets.PDFLAYER_SANDBOX) {
      url += "&test=1";
  }
  console.log('pdflayer request:',url);
  return new Promise((resolve, reject) => {
    request({
      url,
      encoding: null,
    }, (err, res, body)=> {
      if(err || res.statusCode !== 200) {
        return reject(err || new Error(`invalide status ${res.statusCode}`));
      }
      return resolve(body);
    });
  });
}