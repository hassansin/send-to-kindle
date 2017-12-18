import request from './http'
import {stringify} from 'querystring'

const API_ENDPOINT = 'http://api.pdflayer.com/api/convert'
const defaultOptions = {
  margin_top: 0,
  margin_bottom: 0,
  margin_left: 0,
  margin_right: 0,
  use_print_media: 1,
  test: 0
}

/**
* converts any url to pdf using pdflayer.com
*/
export default async function ({apiKey, url, html, ...options}) {
  const qs = Object.assign({}, defaultOptions, options)
  qs.access_key = apiKey
  if (url) {
    qs.document_url = url
  }

  const opts = {
    url: API_ENDPOINT + '?' + stringify(qs),
    encoding: null
  }
  if (html) {
    opts.form = {
      document_html: html
    }
    opts.method = 'POST'
  }
  const {body} = await request(opts)
  return body
}
