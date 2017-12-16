export function validate (req, res, next) {
  if (!req.webtaskContext.secrets.PDFLAYER_APIKEY) {
    return next('missing PDFLAYER_APIKEY')
  }
  if (!req.webtaskContext.secrets.SMTP_CONFIG) {
    return next('missing SMTP_CONFIG')
  }
  if (!req.webtaskContext.secrets.KINDLE_ADDRESS) {
    return next('missing KINDLE_ADDRESS')
  }
  next()
}

export function asyncware (fn) {
  return (req, res, next) => fn(req, res, next).catch(next)
}
