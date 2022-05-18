const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name : String,
    email : String,
    gender : String,
    bdate : String  
   
})

const User = mongoose.model('userCollection',UserSchema,'userCollection')

module.exports = User