var moongose=require('mongoose');
var schema =moongose.Schema

const userDetails=new moongose.Schema({
    id:{type:Number},
    username:{type:String}
})

const UserDetails = moongose.model('userDetails', userDetails);

module.exports = UserDetails;