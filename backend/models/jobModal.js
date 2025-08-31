import mongoose from 'mongoose'

// create the schema

const jobSchema = mongoose.Schema({
    title: {
        type: String,
    },
    tags: {
        type: Array,
    },
    scope: {
        type: {
            projectType: String,
            projectDuration: String,
            experience: String,
        },
        default: {}
    },
    rate: {
        type: {
            rateType: String,
            from: String,
            to: String,
            amount: String,
        },
        default: {}
    },
    desc: {
        type: String
    },

    file: {
        type: String,
    }

}, { timestamps: true })

export const Jobs = mongoose.model('Jobs', jobSchema)