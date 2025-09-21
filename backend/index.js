import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import colors from 'colors';
import { userRouter } from './routes/userRoutes.js';
import { errorHandler } from './middlewares/errorMiddleware.js';
import { connectDB } from './config/connectDB.js';
let port = process.env.PORT_NO;
import cors from 'cors';
import { jobRouter } from './routes/jobRoutes.js';
import cookieParser from "cookie-parser";
import { notificationRouter } from './routes/notificationRoutes.js';
import { Server } from 'socket.io'
import http from 'http'

const app = express();



const server = http.createServer( app )


const io = new Server( server, {
    cors: {
        origin: 'http://localhost:5173',
        credentials: true,
    }
} )









// ✅ Fix CORS for cookies
app.use( cors( {
    origin: "http://localhost:5173",  // frontend URL
    credentials: true                 // allow cookies
} ) );

connectDB();
app.use( cookieParser() );
app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );

app.use( '/api/users', userRouter );
app.use( '/api/jobs', jobRouter );
app.use( '/api/notifications', notificationRouter )
app.use( errorHandler );


io.on( 'connection', ( socket ) => {
    console.log( `User connected on host:${socket.id.cyan}` )

    socket.on( 'sent_message', ( data ) => {
        socket.broadcast.emit( 'received_message', data )
        console.log( data )
    } )



} )












server.listen( port, () => console.log( `Server started on port:${port.yellow}` ) );
