import mongoose from 'mongoose'

const notificationSchema = mongoose.Schema({
    jobID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Jobs'
    },
    client_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    freelancer_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    duration: {
        type: String,
        required: false
    },
    cover_letter: {
        type: String,
        required: false
    },
    notificationType: {
        type: String,
        required: true
    }

}, {
    timestamps: true
})


export const Notifications = mongoose.model('Notifications', notificationSchema);
