//importing

import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";

//app config
const express = require('express')
const app = express()
const port = process.env.PORT || 9000

const pusher = new Pusher({
    appId: '1075590',
    key: '082dd1da0d860a24ffb0',
    secret: '348bcef407e83e58f87a',
    cluster: 'eu',
    encrypted: true
  });


//middleware

app.use(express.json());

//DB config

const connection_url = 'mongodb+srv://admin:gdKYPhhZPWap5kVu@cluster0.jlg0t.mongodb.net/whatsappdb?retryWrites=true&w=majority'
mongoose.connect(connection_url,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

db.once('open',() => {
    console.log("DB connected");

    const msgCollection = db.collection("messagecontent");
    const changeStream = msgCollection.watch();

    changeStream.on('change',(change) =>{
        console.lon(change);
    })

});

//api routes

app.get('/',(req,res)=>res.status(200).send('hello world'));

app.get('/messages/sync',(req,res)=> {
    Messages.find((err, data)=> {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})


app.post('/messages/new',(req,res)=> {
    const dbMessage = req.body

    Messages.create(dbMessage, (err, data)=> {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

//listener

app.listen(port,()=>console.log(`listening on localhost:${port}`))