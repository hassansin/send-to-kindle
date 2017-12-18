# Send to Kindle Bookmarklet
Bookmarklet to send any web page to Kindle E-Reader in just ONE click!


First we need to create a public endpoint that'll do all the tasks of converting to pdf and sending to Kindle device. We'll use [Webtask](https://webtask.io/) from auth0 to create serverless endpoints.

## Requirements:

1. Get API Key from [pdflayer.com/](https://pdflayer.com/). It'll be used to convert html to pdf.

2. Get your `kindle.com` email address: [www.amazon.com/gp/sendtokindle/email](https://www.amazon.com/gp/sendtokindle/email)

3. Prepare SMTP connection url for your APPROVED email which will be used to send emails to your kindle.com address. For Gmail with 2FA enabled, you can generate [App password](https://support.google.com/accounts/answer/185833?hl=en).

example SMTP configuration value:
```text
smtps://user%40gmail.com:password@smtp.gmail.com

```

More about SMTP Connection url: [nodemailer.com/smtp/](https://nodemailer.com/smtp/)


## Deployment

1. Setup Webtask cli tool: [github.com/auth0/wt-cli](https://github.com/auth0/wt-cli)

```sh
npm install -g wt-cli
wt init
```

2. Clone this repo:

```sh
git clone --depth 1 https://github.com/hassansin/send-to-kindle.git
```

3. Deploy

```sh
export PDFLAYER_APIKEY=YOUR_PDFLAYER_APIKEY
export SMTP_CONFIG=YOUR_SMTP_CONNECTION_URI
export KINDLE_ADDRESS=YOUR_KINDLE_ADDRESS
npm run deploy

```

4. Grab the webtask url from the output and run following to genereate the bookmarklet:

```sh
npm run bookmarklet YOUR_WEBTASK_URL
```

Bookmark it and hit the bookmark whenever you want to send any webpage to your Kindle device.




