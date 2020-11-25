import React, { useState, useEffect } from "react";
import io from 'socket.io-client';
import { useParams } from "react-router";

export default function ChatRoom() {
    const { id } = useParams();

    useEffect(() => {
       console.log(id)

       let room = id
        const socket = io('localhost:3001');
        socket.on('connect', function() {
            // Connected, let's sign-up for to receive messages for this room
            socket.emit('room', room);
         });
        socket.on('message', (data) => {
            console.log('Incoming message:', data);
         });
        
      }, []);
    
    return (
        <div>
            <h1>Welcome</h1>
        </div>
    )
}
