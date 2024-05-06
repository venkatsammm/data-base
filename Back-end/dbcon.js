const { default: mongoose } = require('mongoose');
const moongose =require('mongoose');
require('dotenv').config();

const startDatabase=async()=>{
    try{
        const conn=await mongoose.connect(process.env.DATABASE_URI);
        console.log(conn)

    }catch(err){
        console.log(err);
        process.exit(1)

    }

}
const isConnected=async()=>{
    return(moongose.Connection.readystate === 1)

}

module.exports = {startDatabase,isConnected};