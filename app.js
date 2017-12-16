import express from 'express'
import wt from 'webtask-tools'
import bodyParser from 'body-parser'
import convertToPDF from './src/pdf.js'
import sendToKindle from './src/kindle.js'
import attachment, {parseTitle} from './src/attachment.js'
import {validate, asyncware} from './src/middleware.js'

const app = express()

app.use(validate)

app.get('/', asyncware(async (req, res, next) => {
  const ctx = req.webtaskContext
  const url = ctx.query.url
  const test = ctx.query.test
  const title = ctx.query.title
  const convert = Boolean(ctx.query.convert)

  if (!url) {
    throw new Error('missing url parameter')
  }

  let {filename, content} = await attachment({apiKey: ctx.secrets.PDFLAYER_APIKEY, url, test})

  filename = title ? title.replace('.pdf') + '.pdf' : filename

  const info = await sendToKindle({
    smtp: ctx.secrets.SMTP_CONFIG,
    address: ctx.secrets.KINDLE_ADDRESS,
    attachments: [{filename, content}],
    convert
  })
  res.json(info)
}))

app.post('/', bodyParser.raw({type: () => true}), asyncware(async (req, res, next) => {
  const ctx = req.webtaskContext
  const test = ctx.query.test
  const title = ctx.query.title
  const convert = Boolean(ctx.query.convert)

  if (!req.body) {
    throw new Error('missing html body')
  }

  const filename = title ? title.replace('.pdf') + '.pdf' : parseTitle(req.body)
  const {body} = await convertToPDF({apiKey: ctx.secrets.PDFLAYER_APIKEY, html: req.body, test})

  const info = await sendToKindle({
    smtp: ctx.secrets.SMTP_CONFIG,
    address: ctx.secrets.KINDLE_ADDRESS,
    attachments: [{filename, content: body}],
    convert
  })
  res.json(info)
}))

export default wt.fromExpress(app)
