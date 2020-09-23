const mongoose = require('mongoose');



const userSchema = mongoose.Schema({
    _id: String,
    name:String,
    email:String,
    zip:String,
});


//Collection iniside the datebase

const USER = mongoose.model('user',userSchema);

module.export = USER; 

