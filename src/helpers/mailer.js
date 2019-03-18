import nodemailer from "nodemailer";

import { MAILER } from "../etc/config";

const transporter = nodemailer.createTransport({
  host: MAILER.HOST,
  port: MAILER.PORT,
  secure: false,
  ignoreTLS: true,
  auth: {
    user: MAILER.USER,
    pass: MAILER.PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

const sendMail = (from, to, subject, html) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail({ from, to, subject, html }, (error, info) => {
      if (error) {
        reject({ ok: false, error });
      }
      resolve({ ok: true, info });
    });
  });
};

export default sendMail;
