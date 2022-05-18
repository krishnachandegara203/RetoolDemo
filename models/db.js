const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb+srv://KrishnaChandegara:Krishna&0409@cluster0.5jnik.mongodb.net/userDB?retryWrites=true&w=majority',{    
    useNewUrlParser : true,
  
}, err => {
    if(err) console.log(`DB not Connected ${err}`)
    console.log(`MongoDB Connected...`)
})