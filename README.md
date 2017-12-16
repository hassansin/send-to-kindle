# Send to Kindle
Send any web page to your Kindle E-Reader using Webtask.io

## Requirements:

1. Install Node.js v8+

2. Get API Key from [pdflayer.com/](https://pdflayer.com/)

3. Get your `kindle.com` email address: [www.amazon.com/gp/sendtokindle/email](https://www.amazon.com/gp/sendtokindle/email)

4. Prepare SMTP connection url for your authorized email which will be used to send emails to your kindle.com address. For Gmail, you can generate [App password](https://support.google.com/accounts/answer/185833?hl=en).

example SMTP configuration value:
```text
smtps://user%40gmail.com:apppassword@smtp.gmail.com
```

More about SMTP Connection url: [nodemailer.com/smtp/](https://nodemailer.com/smtp/)


## Deployment

1. Setup Webtask cli tool: [github.com/auth0/wt-cli](https://github.com/auth0/wt-cli)

```sh
npm i -g wt-cli
wt init
```

2. Clone this repo and install dependencies: 

```sh
git clone --depth 1 https://github.com/hassansin/send-to-kindle.git
npm i
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
npm run bookmarklet WEBTASK_URL
```

Bookmark it and hit the bookmark whenever you want send any webpage to your Kindle device.




