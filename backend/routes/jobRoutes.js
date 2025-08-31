import express from 'express'
import { getJobs, postJob } from '../controllers/jobController.js'
export const jobRouter = express.Router()


jobRouter.post('/post-job', postJob)
jobRouter.get('/get-jobs', getJobs)

