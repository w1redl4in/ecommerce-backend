import nodemailer from 'nodemailer'
import {mailer} from './config'

const Mailer = nodemailer.createTransport({
  host:'smtp.gmail.com',
  port: 587,
  auth: {
    user: mailer.host,
    pass: mailer.password,
  }
})

export default Mailer
