import {extname, parse} from 'path'

const allowedExt = ['.pdf', '.html', '.txt', '.doc', '.docx', '.png', '.jpeg', '.jpg', '.gif', '.bmp']

export default function (title = '', url = '') {
  let ext
  url = url.replace(/\/?\?.*/, '')
  if (title && allowedExt.indexOf(extname(title)) > -1) {
    ext = extname(title)
  }
  if (title && allowedExt.indexOf(ext) > -1) {
    return title
  }

  if (!ext && allowedExt.indexOf(extname(url)) > -1) {
    ext = extname(url)
  }
  ext = ext || '.pdf'

  if (title) {
    return title + ext
  }
  const {name} = parse(url)
  return name + ext
}
