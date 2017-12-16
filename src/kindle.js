import nodemailer from 'nodemailer'

/**
* sends attachments to kindle address
*/
export default async function ({smtp, address, convert, attachments}) {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport(smtp)
    const opts = {
      to: address,
      text: 'document',
      subject: convert ? 'convert' : 'document',
      attachments
    }
    console.log('sending to kindle')
    transporter.sendMail(opts, (err, info) => {
      if (err) {
        return reject(err)
      }
      info.attachments = attachments.map(att => att.filename)
      return resolve(info)
    })
  })
}
