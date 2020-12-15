import nodemailer from 'nodemailer'

const Mailer = nodemailer.createTransport({
  host:'smtp.gmail.com',
  port: 587,
  auth: {
    user: 'ecommercedosdev@gmail.com',
    pass: 'r6123456',
  }
})

export default Mailer
