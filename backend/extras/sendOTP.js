import nodemailer from 'nodemailer'
import { userModel } from '../models/userModel.js'
export const sendOTP = (email, otp) => {
  // send otp -> mail


  // configurations

  let transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'hsuntariq@gmail.com',
      pass: 'eghnxzjoedxlphjl'
    }
  })


  // options


  let options = {
    subject: 'OTP Verification',
    from: 'hsuntariq@gmail.com',
    to: email,
    html: `
            <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>OTP Verification</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Arial', sans-serif; background-color: #f4f4f9; color: #333;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);">
    <!-- Header -->
    <tr>
      <td style="background: linear-gradient(135deg, #6b48ff, #00ddeb); border-radius: 12px 12px 0 0; padding: 40px 20px; text-align: center;">
        <h1 style="color: #ffffff; font-size: 28px; margin: 0; font-weight: bold;">Verify Your Account</h1>
        <p style="color: #e6e6fa; font-size: 16px; margin: 10px 0 0;">Secure your account with this one-time password</p>
      </td>
    </tr>
    <!-- Body -->
    <tr>
      <td style="padding: 40px 30px; text-align: center;">
        <h2 style="font-size: 22px; margin: 0 0 20px; color: #333;">Your OTP Code</h2>
        <div style="display: inline-block; background-color: #f4f4f9; padding: 15px 25px; border-radius: 8px; font-size: 24px; font-weight: bold; color: #6b48ff; letter-spacing: 4px;">
          ${otp}
        </div>
        <p style="font-size: 16px; color: #666; margin: 20px 0;">Please use this code to verify your email address. This OTP is valid for the next <strong>10 minutes</strong>.</p>
        <p style="font-size: 14px; color: #999; margin: 20px 0;">If you didn’t request this, please ignore this email or contact our support team.</p>
        <a href="#" style="display: inline-block; background-color: #6b48ff; color: #ffffff; padding: 12px 30px; border-radius: 25px; text-decoration: none; font-size: 16px; font-weight: bold; margin-top: 20px;">Verify Now</a>
      </td>
    </tr>
    <!-- Footer -->
    <tr>
      <td style="background-color: #f4f4f9; padding: 20px; text-align: center; border-radius: 0 0 12px 12px;">
        <p style="font-size: 14px; color: #666; margin: 0;">&copy; 2025 Your Company Name. All rights reserved.</p>
        <p style="font-size: 14px; color: #666; margin: 10px 0;">
          <a href="#" style="color: #6b48ff; text-decoration: none;">Privacy Policy</a> | 
          <a href="#" style="color: #6b48ff; text-decoration: none;">Contact Us</a>
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
        `
  }




  let mail = transport.sendMail(options, (err, info) => {
    try {
      console.log('mail sent')
    } catch (error) {
      console.log(err)
    }
  })



  setTimeout(async () => {

    let user = await userModel.findOne({ email })

    if (!user) {
      res.status(404)
      throw new Error('Invalid email')
    }

    user.otp = null
    await user.save()

  }, 600000);

}