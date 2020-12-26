import nodemailer from 'nodemailer';
import { mailer } from './config';
import { aprovedEmail, recoveryPasswordEmail } from '../emails';
import logger from '../middlewares/Logger';

const Mailer = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: mailer.host,
    pass: mailer.password,
  },
});

async function sendEmailCreated(to: string, name: string): Promise<void> {
  await Mailer.sendMail({
    from: mailer.host,
    to,
    subject: mailer.subject,
    html: aprovedEmail(name),
  })
    .then((message) =>
      logger.info(`::nodemailer::sendEmail::email sent to ${to}`, message)
    )
    .catch((error) =>
      logger.error(
        `::nodemailer::sendEmail::failed to sent email to ${to}`,
        error
      )
    );
}

async function sendEmailRecovery(to: string, password: string): Promise<void> {
  await Mailer.sendMail({
    from: mailer.host,
    to,
    subject: mailer.subject,
    html: recoveryPasswordEmail(password),
  })
    .then((message) => {
      logger.info(
        `::nodemailer::sendEmailRecovery::email sent to ${to}`,
        message
      );
    })
    .catch((error) => {
      logger.error(
        `::nodemailer::sendEmailRecovery::failed to sent email to ${to}`,
        error
      );
    });
}

export { sendEmailCreated, sendEmailRecovery };
