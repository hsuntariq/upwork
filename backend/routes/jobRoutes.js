import express from 'express'
import { postJob } from '../controllers/jobController.js'
export const jobRouter = express.Router()


jobRouter.post('/post-job', postJob)


