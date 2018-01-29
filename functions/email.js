const nodemailer = require('nodemailer')

export default function sendEmail(user, stock) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'apollostock@gmail.com',
      pass: process.env.GMAIL,
    },
  })

  const mailOptions = {
    from: 'Apollo Stock <tracker@apollostock.io>',
    to: user,
    subject: `${stock} has dropped below your SPP!`,
    html: `<p>${stock} has dropped below your sell point percentage.
      It might be time to think about selling.</p>`,
  }

  transporter.sendMail(mailOptions, (err, info) => (err ? err : info))
}
