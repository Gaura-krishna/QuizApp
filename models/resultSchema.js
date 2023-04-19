import mongoose from 'mongoose';

const {Schema}= mongoose;

const resultModel= new Schema({
    username:{
        type:String,

    },
    result:{
        type:Array,
        default:[]
       
    },
   attempts:{
     type:Number,
     default:0
    },
    points:{
        type:Number,
        default:0
    },
    passfail:{
        type:String,
        default:''

    }


})

export const result = mongoose.model('Result',resultModel)