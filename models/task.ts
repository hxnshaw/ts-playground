import mongoose from 'mongoose';

const taskSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please Provide a Name For This Task"],
        trim:true
    },
    description:{
        type:String,
        required:[true, "Please Provide a Description For This Task"],
        trim:true
    },

},
{timestamps:true})

module.exports=mongoose.model('Task',taskSchema);