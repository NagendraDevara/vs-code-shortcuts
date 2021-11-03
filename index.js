const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
var path = require('path')
// import express from 'express'
const express = require('express')
app.use(express.static(path.join(__dirname)));
var clients = {};

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
var clients = io.sockets;

io.on('connection', (socket) => {
  socket.on('create', function (room) {
    console.log({ room });
    socket.join(room);
  });
  socket.on('chat message', (msg, room) => {
    console.log(room);
    socket.to(room).emit('chat message', msg)
  })
  socket.on('next',(msg)=>{
    socket.leave(msg)
    console.log({msg});
  })
  // socket.on('chat message', (msg, room) => {
  //   let chatId = ''
  //   console.log({ userId });
  //   clients.sockets.forEach(function (data, counter) {
  //     if (data.id.substring(0, 4) === room.trim()) {
  //       chatId = data.id;
  //     }
  //     // var isConnected = data.connected//true,false;

  //   });
  //   // console.log(chatId);
  //   if (chatId) {
  //     // socket.broadcast.emit('chat message', msg)
  //     socket.to(chatId).emit('chat message', msg)
  //   } else {
  //     console.log('room not found');
  //   }
  //   // io.emit('chat message', msg);
  // });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
