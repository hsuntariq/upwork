import React, { useContext, useState } from "react";
import { JobContext } from "../context/JobContext";
import io from 'socket.io-client'

import { useSelector } from 'react-redux'
import { useEffect } from "react";
const socket = io.connect( 'http://localhost:5174' )
const Chat = () => {

    const [input, setInput] = useState( "" );
    const [sentMessages, setSentMessages] = useState( [] )
    const [receivedMessages, setReceivedMessages] = useState( [] )
    const { myJob } = useContext( JobContext )


    const { user } = useSelector( ( state ) => state.auth )

    const sendMessage = ( e ) => {
        e.preventDefault();
        if ( !input.trim() ) return;

        socket.emit( 'sent_message', {
            message: input,
            time: Date.now(),
            sent: true,
            job: myJob,
            sender_id: user?._id,
            receiver_id: myJob?.user_id ? myJob.user_id : user._id
        } )
        setSentMessages( ( prevValues ) => [
            ...prevValues,
            {
                message: input,
                time: Date.now(),
                sent: true,
                job: myJob,
                sender_id: user?._id,
                receiver_id: myJob?.user_id ? myJob.user_id : user._id
            }
        ] )
    };


    useEffect( () => {
        socket.on( 'received_message', ( data ) => {
            // who is going to receive the messages


            if ( data.sender_id == user._id || data.receiver_id == user._id ) {
                setReceivedMessages( ( prevValues ) => [
                    ...prevValues,
                    {
                        message: data.message,
                        time: Date.now(),
                        sent: false,
                        job: data.job,
                        sender_id: data.sender_id,
                        receiver_id: myJob?.user_id ? myJob.user_id : user._id
                    }
                ] )
            }

        } )

        return () => {
            socket.off( 'received_message' )
        }


    }, [socket] )


    const allMessages = [...sentMessages, ...receivedMessages].sort( ( a, b ) => {
        return a.time - b.time
    } )






    return (
        <div className="h-screen flex bg-gray-100">
            {/* Sidebar */}
            <div className="w-1/4 bg-white border-r shadow-lg hidden md:flex flex-col">
                <div className="p-4 font-bold text-xl border-b">Chats</div>
                <div className="flex-1 overflow-y-auto">
                    {["John", "Sarah", "Mike", "Emily"].map( ( user, i ) => (
                        <div
                            key={i}
                            className="p-4 border-b hover:bg-gray-100 cursor-pointer"
                        >
                            {user}
                        </div>
                    ) )}
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <div className="p-4 bg-white border-b shadow flex items-center">
                    <div className="w-10 h-10 bg-blue-500 rounded-full mr-3"></div>
                    <h2 className="font-semibold">John Doe</h2>
                </div>

                {/* Messages */}
                <div className="flex-1 p-4 overflow-y-auto space-y-3">
                    {allMessages?.map( ( item, index ) => {
                        return (
                            <>
                                {item.sent ? (

                                    <div key={index} className="rounded-full bg-green-500 text-white ms-auto w-max p-2">
                                        {item.message}
                                    </div>

                                ) : (

                                    <div key={index} className="rounded-full bg-gray-300 text-black me-auto w-max p-2">
                                        {item.message}
                                    </div>

                                )}
                            </>
                        )
                    } )}
                </div>

                {/* Input */}
                <form
                    className="p-4 bg-white border-t flex items-center"
                >
                    <input
                        type="text"
                        value={input}
                        onChange={( e ) => setInput( e.target.value )}
                        placeholder="Type a message..."
                        className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                        type="submit"
                        onClick={sendMessage}
                        className="ml-3 bg-blue-500 text-white px-4 py-2 rounded-full shadow hover:bg-blue-600 transition"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Chat;
