import { Server } from "socket.io";

const io = new Server(9000, {
  cors: {
    origin: 'http://localhost:5173'
  }
});
let users = [];

const addUser = (userData, socketId) => {
  // Check if the user is already present in the users array
  const existingUserIndex = users.findIndex(user => user.sub === userData.sub);
  
  if (existingUserIndex !== -1) {
    // If the user is already present, update their socket ID
    users[existingUserIndex].socketId = socketId;
  } else {
    // If the user is not present, add them to the users array
    users.push({ ...userData, socketId });
  }
  
  console.log(users);
};

const getUser = (userId) => {
  return users.find(user => user.sub === userId);
}

io.on('connection', (socket) => {
  console.log('user connected');
  
  socket.on("addUsers", userData => {
    addUser(userData, socket.id);
    io.emit('getUsers', users);
  });
  
  socket.on('SendMessages', data => {
    console.log(data);
    const user = getUser(data.reciverid);
    console.log(user);
    io.to(user.socketId).emit('getmessage', data);
  });

});
