import axios from "axios";

export const sendOTPEmail = async (to, otp) => {
  try {
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: { email: process.env.SMTP_FROM, name: "Your App Name" },
        to: [{ email: to }],
        subject: "Email Verification OTP",
        htmlContent: `
          <h2>Email Verification</h2>
          <p>Your OTP is:</p>
          <h1>${otp}</h1>
          <p>This OTP is valid for 10 minutes.</p>
        `,
      },
      {
        headers: {
          "api-key": process.env.SMTP_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    return true;
  } catch (error) {
    console.error("Brevo API Error:", error.response ? error.response.data : error.message);
    return false;
  }
};