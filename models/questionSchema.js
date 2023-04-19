import mongoose from 'mongoose';

const {Schema}= mongoose;

const questionModel= new Schema({
    questions:{
        type:Array,
        default:[]
    },
    answer:{
        type:[],
        default:[]
    },
    createdAt:{
      type:Date,
      default:Date.now  
    }
})

export const question = mongoose.model('Question',questionModel)