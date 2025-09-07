import express from 'express'
import { getJobs, postJob } from '../controllers/jobController.js'
import { decodeToken } from '../middlewares/authMiddleware.js'
export const jobRouter = express.Router()


jobRouter.post('/post-job', decodeToken, postJob)
jobRouter.get('/get-jobs', getJobs)

