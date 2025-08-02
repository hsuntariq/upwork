import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    role: {
        type: String,
        required: true,
    },
    f_name: {
        type: String,
        required: true
    },
    l_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    mails: {
        type: Boolean,
        required: false,
        default: false
    },
    terms: {
        type: Boolean,
        required: true,
        default: true
    },
    otp: {
        type: String,


    }
}, { timestamps: true })


export const userModel = mongoose.model('User', userSchema)