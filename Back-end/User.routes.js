const express = require('express');
const app =express();

const getRouter=express.Router();
const postRouter=express.Router();

const UserDetails=require('./Modal/UserDetails.js')


getRouter.use(express.json());
postRouter.use(express.json());


getRouter.get('/getallusers', async(req,res)=>{
    try{
        const users  = await UserDetails.find();
        res.status(200).json(users);

    }catch(err){
        console.log(err);
        return res.status(500).send({
            message:"internal server error"
        })
    }
})

postRouter.post('/post' ,async (req, res) => {
    try {
        if(!error){
        const {id,username } = req.body;
        console.log("id", id, "name", name)

        const user = await UserDetails.create({ id,username });
        res.status(201).json(user);
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            message: err
        });
    }
});


module.exports={getRouter,postRouter};