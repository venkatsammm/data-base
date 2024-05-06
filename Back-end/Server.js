const express =require('express')
const {startDatabase,isConnected}=require('./dbcon.js');
const {getRouter,postRouter} =require('./User.routes.js');
const bodyParser = require('body-parser');
const cors=require('cors');

const app=express();
app.use(bodyParser.json())
app.use(cors())


app.get("/",(req,res)=>{
    res.send("hello")
})
app.get("/home",(req,res)=>{
    res.json({
        message :isConnected() ?" database connected" : "database not connected"
    })

})

app.listen(5000,async()=>{
    await startDatabase();
    console.log("connected to the port  5000");
})
app.use('/',getRouter);
app.use('/',postRouter);