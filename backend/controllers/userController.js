
import { userModel } from '../models/userModel.js'
import bcrypt from 'bcrypt'
import otpGenerator from 'otp-generator'
import { sendOTP } from '../extras/sendOTP.js'
export const registerUser = async (req, res) => {
    // get the data from the frontend
    const { role, f_name, l_name, email, password, country, mails, terms } = req.body
    // check to see if the fields are added
    if (!role || !f_name || !l_name || !email || !password || !country) {
        res.status(400)
        throw new Error('Please enter all the values')
    }
    // check if mail already exists
    let isUserPresent = await userModel.findOne({
        email
    })
    if (isUserPresent) {
        res.status(401)
        throw new Error('Email already exists!')
    }
    // encrypt the password
    let hashedPassword = await bcrypt.hash(password, 10)
    // generate the otp
    let otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, digits: true, lowerCaseAlphabets: false })
    // send mail
    sendOTP(email, otp)
    let createdUser = await userModel.create({
        role, f_name, l_name, email, password: hashedPassword, country, mails, terms, otp
    })
    res.send(createdUser)
}