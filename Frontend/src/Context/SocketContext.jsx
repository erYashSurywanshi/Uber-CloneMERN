import React , { createContext, useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';

export const SocketContext = createContext();

const  socket = io(import.meta.env.VITE_BACKEND_URL);

export const SocketProvider = ({ children }) => {

    useEffect(() => {
       
        socket.on('connect', () => {
                console.log('Connected to server with ID:', socket.id);
            });
    
            socket.on('disconnect', () => {
                console.log('Disconnected from server');
            });
    
            return () => {

              
            };
    },[])



    return(
        <SocketContext.Provider value={{ socket }}>
            {children}
        </SocketContext.Provider>
    )
}
export default SocketProvider;