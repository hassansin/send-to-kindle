import request from 'request'

export default function (config) {
  return new Promise((resolve, reject) => {
    request(config, (err, res, body) => {
      if (err || res.statusCode !== 200) {
        return reject(err || new Error(`invalide status ${res.statusCode}`))
      }
      return resolve({res, body})
    })
  })
}
