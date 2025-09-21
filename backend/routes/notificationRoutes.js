import express from 'express'
import { decodeToken } from '../middlewares/authMiddleware.js'
import { checkProposal, notifyProposal } from '../controllers/notificationController.js'
export const notificationRouter = express.Router()



notificationRouter.post('/proposal-notification/:client_id', decodeToken, notifyProposal)
notificationRouter.post('/check-proposal', decodeToken, checkProposal)


