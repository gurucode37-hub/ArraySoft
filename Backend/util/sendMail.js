import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
   host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

export const sendOTPEmail = async (to, otp) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: to,
      subject: "Email Verification OTP",
      html: `
        <h2>Email Verification</h2>
        <p>Your OTP is:</p>
        <h1>${otp}</h1>
        <p>This OTP is valid for 10 minutes.</p>
      `,
    });

    return true;
  } catch (error) {
    return false;
  }
};
