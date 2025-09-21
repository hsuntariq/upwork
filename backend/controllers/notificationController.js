import { Notifications } from "../models/notificatioModal.js";

export const notifyProposal = async (req, res) => {
    let freelancer_id = req.user._id;
    let client_id = req.params.client_id

    const { jobID, duration, cover_letter, notificationType } = req.body

    if (!freelancer_id || !client_id) {
        res.status(401)
        throw new Error('IDs not defined')
    }

    if (!jobID || !notificationType) {
        res.status(400)
        throw new Error('Please enter all the fields')
    }

    let checkProposal = await Notifications.findOne({
        jobID, freelancer_id
    })

    if (checkProposal) {
        res.status(400)
        throw new Error('Proposal already submitted!')
    }

    let newNotification = await Notifications.create({
        jobID, duration, cover_letter, notificationType, freelancer_id, client_id
    })

    res.send(newNotification)

}


export const checkProposal = async (req, res) => {
    const { jobID } = req.body
    const freelancer_id = req.user._id

    let checkProposal = await Notifications.findOne({
        jobID, freelancer_id
    })

    if (checkProposal) {
        res.send('Already submitted')
    } else {
        res.send('not submitted')
    }

}