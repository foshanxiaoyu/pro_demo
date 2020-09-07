const mongoose = require('mongoose');



const userSchema = mongoose.Schema({
    _id: String,
    name:String,
    email:String,
    zip:String,
});


//Collection iniside the datebase

module.exports = mongoose.model('user',userSchema)

