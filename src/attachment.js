import request from './http'
import pdf from './pdf'

export default async function ({apiKey, url, ...options}) {
  let {res, body} = await fetchContent(url)
  let filename = url.replace(/\/\?.*/, '').split('/').pop()
  if (res.headers['content-type'].indexOf('text/html') > -1) {
    filename = parseTitle(body)
  }
  const {body: content} = await pdf({html: body, apiKey, ...options})
  return {filename, content}
}

export async function fetchContent (url) {
  console.log('fetching url', url)
  return request({
    url,
    headers: {
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36'
    },
    encoding: null
  })
}

export function parseTitle (body) {
  const matches = body.toString().match(/title>([\s\S]*?)<\/title/i)
  const title = matches ? `${matches[1]}.pdf` : 'document.pdf'
  return title.replace(/\s+/g, '-').replace(/[-]+/g, '-')
}
