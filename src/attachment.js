import request from './http'
import pdf from './pdf'

// only convert html files to pdf, leave other file type contents
export default async function ({apiKey, url, ...options}) {
  let {res, body} = await fetchContent(url)
  if (res.headers['content-type'].indexOf('text/html') > -1) {
    body = await pdf({html: body, apiKey, ...options})
  }
  return body
}

export async function fetchContent (url) {
  return request({
    url,
    headers: {
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36'
    },
    encoding: null
  })
}
