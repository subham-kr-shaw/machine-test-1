import mongoose from "mongoose"

const noteschema= new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  description:{
     type:String,
     default:""
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user",
    required:true
  },
  createdat:{
    type:date,
    required:true
  }
});
export const note = mongoose.model("Todo", noteschema);

