import { Jobs } from "../models/jobModal.js"

export const postJob = async (req, res) => {
    const { title, tags, scope, rate, desc, file } = req.body
    if (!title || !tags || !scope || !rate || !desc) {
        res.status(400)
        throw new Error('Please enter all the fields')
    }

    let createdJob = await Jobs.create({
        title, tags, scope, rate, desc, file
    })


    res.send(createdJob)



}


export const getJobs = async (req, res) => {
    let myJobs = await Jobs.find().sort({ createdAt: -1 })
    res.send(myJobs)
} 