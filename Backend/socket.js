const socketIo = require('socket.io');
const userModel = require('./models/user.model');
const captainModel = require('./models/captain.model');

let io;

function initializeSocket(server) {
  io = socketIo(server, {
    cors: {
      origin: "*", // Allow all origins for simplicity; adjust as needed for security
      methods: ["GET", "POST"]
    }
  });

  io.on('connection', (socket) => {
    console.log('New client connected:', socket.id);

    socket.on('join', async(data)=>{
        const {userId, userType} = data;

        if(userType === 'user'){
          await userModel.findByIdAndUpdate(userId, {socketId: socket.id});
            if(userType ==="captain"){
                await captainModel.findByIdAndUpdate(userId, {socketId: socket.id})
}
        }
    })

    socket.on('updateLocation', async(data)=>{
      const {userId,userType,location} = data;
     
    if(!location || !location.lng || !location.ltd){
        return socket.emit('error', {message: 'Invalid location data'});
    }

    await captainModel.findByIdAndUpdate(userId, {location:{
        lng: location.lng,
        ltd: location.ltd
    }})
    })


    socket.on('disconnect', () => {
      console.log('Client disconnected:', socket.id);
    });

    // Additional event listeners can be added here
  });
}

 function sendMessageToSocketId(socketId, messageObject) {
   if (io) {
     io.to(socketId).emit(messageObject.event, messageObject.data);
   } else {
     console.error('Socket.io not initialized.');
   }
 }

 module.exports = {initializeSocket, sendMessageToSocketId};