import express, { application } from 'express'
import dotenv from 'dotenv'
dotenv.config()
import colors from 'colors'
import { userRouter } from './routes/userRoutes.js'
import { errorHandler } from './middlewares/errorMiddleware.js'
import { connectDB } from './config/connectDB.js'
let port = process.env.PORT_NO
import cors from 'cors'
const app = express()

app.use(cors())
connectDB()

app.use(express.json())
app.use(express.urlencoded())
app.use('/api/users', userRouter)
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port:${port.yellow}`))