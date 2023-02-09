//---Importing libraries and packages ----------//
const express = require('express');
const app = express(); //app variable and execute express on top of it
const mongoose = require('mongoose');
const dataRoute = require('./routes/data');
const outputRoute = require('./routes/outputs');
const bodyParser = require('body-parser');
const {Server} = require('socket.io');
const cors = require('cors');
const http = require('http')
const Output = require('./models/Experiment');


//---------Middlewares--------//
app.use(bodyParser.json()); //to display values in the backend console
app.use('/data', dataRoute); //calls the route data
app.use('/outputs', outputRoute); 
app.use(cors());

const server = http.createServer(app);

//----------DB CONNECTION ---------//

mongoose.connect("mongodb://fofmongo:Rockwool321!@cigas0001:27017", {dbName: 'imperion_pilot'}, async (err) => {
    if(!err){
        console.log('connected to DB!')
    }else{
        console.log(err)
    }
});


const io = new Server(server,{
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});


// io.on("connection", (socket) =>{
//     console.log(socket.id);
//     Output.watch().on("change", (data) => {
//         socket.emit("message_added", data);
//     });
// });

server.listen(5000, () =>{
    console.log('Server started');
});

