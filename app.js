const express = require('express');
const app = express();
const indexRouter = require('./routes/index');

const path = require('path');

const http = require('http');//creating a http server which will allow socket.io to perform bcz socket io cants run on app.express
//requiring socket.io
const socketIO = require('socket.io');
 const server = http.createServer(app); //creating a aserver of using http which will use the functionality of app
 const io = socketIO(server); //creating a socket io server which will be used to connect with client

 let waitingUsers = [];//users waiting
 let rooms = { // creating it as object becz it would be a room and that room will be holding an array which will hold the two users in a araay
    'roomName' : ["user1", "user2"],

 }

 io.on("connection" , function (socket) { // io ko recieve kiya h front end se isliye on use kr rhe h nd receive kiya h connection pr 
    //on connection we want to join the room in which two people are connected
    // from the frontend socket . emit join room is emitted so we have to recieve it here 
    console.log(`user connected: ${socket.id}`);
    socket.on("joinroom", function () {
        console.log(`join room event received from: ${socket.id}`);
        if(waitingUsers.length > 0 ){
            //to get one of the user out of the array randomly 
            let partner = waitingUsers.shift();
            const roomname = `${socket.id}-${partner.id}`;
            //to join room 
            
            socket.join(roomname);
            partner.join(roomname);//then partner join
            //to send message to the room 
            io.to(roomname).emit("joined",roomname);
           
        }
        else{
            //if nobody is waiting then i will push myself in the array
            waitingUsers.push(socket);
        }

       });

       socket.on("signalingMessage", function(data){
        socket.broadcast.to(data.room).emit("signalingMessage",data.message);
       })
       //for message to be sent
       socket.on("message", function (data) {
        // for sending message to both the users socket broadcasts khud ko chodh l bakiyo ko user bhejta h 
        socket.broadcast.to(data.room).emit("message", data.message)
        
       });
       //for vc 
       socket.on("startVideoCall", function ({room}) {
        // for sending message to both the users socket broadcasts khud ko chodh l bakiyo ko user bhejta h 
        socket.broadcast.to(room).emit("incomingCall")
        
       });

       socket.on("rejectCall", function ({room}) {
        // for sending message to both the users socket broadcasts khud ko chodh l bakiyo ko user bhejta h 
        socket.broadcast.to(room).emit("callRejected")
        
       });

       socket.on("acceptCall",function({room}){
        socket.broadcast.to(room).emit("callAccepted")
       })



       // for disconntion
       socket.on("disconnect", function () {
            console.log(`user disconnected: ${socket.id}`);
            //if user disconnected then remove him from the waitingUsers array
           let index = waitingUsers.findIndex(waitingUsers => waitingUsers.id === socket.id);

           waitingUsers.splice(index, 1); //jo index ki value ayi h vo hata do or ek user hatao srf to vo user hmare array se hat jayega
       });

       

    });




//setting up the ejs 
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", indexRouter);

server.listen(3000); //server is built on app which will allow express and socket io to run so we can use both now 
