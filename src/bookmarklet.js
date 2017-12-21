const fs = require('fs')
const assert = require('assert')

/* global document,alert,fetch,location,prompt */
const script = function () {
  const u = location.href.replace(/^.*?http/, 'http'), t = prompt(`You are about to send "${u}" to your Kindle. Add your title`, document.title)
  if (t !== null) {
    let o = {
        method: 'POST',
        body: document.documentElement.innerHTML
      }, w = `__WTURL__?title=${t}`
    if (['pdf', 'doc', 'docx', 'txt', 'png', 'jpg', 'jpeg', 'gif'].indexOf(u.split('.').pop()) > -1) {
      w += '&url=' + u
      o = undefined
    }
    fetch(w, o).then(r => {
      if (r.ok) {
        return r.json()
      }
      return r.text()
    })
    .then(data => (data && data.attachments) ? alert(`"${data.attachments[0]}" is sent to your kindle`) : alert(data))
    .catch(e => {
      if (e && e.message === 'Failed to fetch') {
        location.href = w + '&url=' + u
        return
      }
      console.log(e), alert(e.message)
    })
  }
}

const url = process.argv[2]
assert.ok(url, 'missing webtask url')
fs.writeSync(1, '=========== Bookmark the following script ========\n\n')
const bookmarklet = 'javascript:(' + encodeURIComponent(script.toString().replace('__WTURL__', url)) + ')()\n\n'
fs.writeSync(1, bookmarklet)
// console.log(bookmarklet.length)
