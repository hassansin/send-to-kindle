import express from 'express'
import wt from 'webtask-tools'
import bodyParser from 'body-parser'
import convertToPDF from './src/pdf.js'
import sendToKindle from './src/kindle.js'
import attachment from './src/attachment.js'
import {validate, asyncware} from './src/middleware.js'
import getFilename from './src/filename'

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

  const content = await attachment({apiKey: ctx.secrets.PDFLAYER_APIKEY, url, test})

  const filename = getFilename(title, url)

  const info = await sendToKindle({
    smtp: ctx.secrets.SMTP_CONFIG,
    address: ctx.secrets.KINDLE_ADDRESS,
    attachments: [{filename, content}],
    convert
  })
  res.json(info)
}))

app.post('/', bodyParser.raw({type: () => true, limit: '10MB'}), asyncware(async (req, res, next) => {
  const ctx = req.webtaskContext
  const test = ctx.query.test
  const title = ctx.query.title
  const convert = Boolean(ctx.query.convert)

  if (!req.body) {
    throw new Error('missing body')
  }

  const filename = getFilename(title)
  const content = await convertToPDF({apiKey: ctx.secrets.PDFLAYER_APIKEY, html: req.body, test})

  const info = await sendToKindle({
    smtp: ctx.secrets.SMTP_CONFIG,
    address: ctx.secrets.KINDLE_ADDRESS,
    attachments: [{filename, content}],
    convert
  })
  res.json(info)
}))

app.use((err, req, res, next) => {
  res.status(500).send(err.message || err)
})

export default wt.fromExpress(app)
