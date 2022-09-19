const mongoose = require("mongoose")

const Schema=mongoose.Schema;

const ProfileSchema=new Schema({
    Name:{
        type:String
    },
    Email:{
        type:String
    }
});

module.exports=mongoose.model("profile",ProfileSchema);