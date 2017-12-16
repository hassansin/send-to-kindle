const fs = require('fs')
const assert = require('assert')

const script = `(function(){const t=location.href.replace(/^.*?http/,"http"),e=window.prompt(\`You are about to send \${t} to your Kindle. Add your title\`,document.title);if(null!==e){fetch(\`__WTURL__?title=\${e}\`,{method:"post",body:document.documentElement.innerHTML}).then(t=>t.json()).then(t=>alert(\`\${t.attachments[0]} is sent to your kindle\`)).catch(t=>{console.log(t),alert(t.message)})}})()`

const url = process.argv[2]
assert.ok(url, 'missing webtask url')
fs.writeSync(1, '=========== Bookmark the following script ========\n\n')
fs.writeSync(1, 'javascript:' + encodeURIComponent(script.replace('__WTURL__', url)) + '\n\n')
