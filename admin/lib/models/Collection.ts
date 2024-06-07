import mongoose from "mongoose";
import { title } from "process";
import { string } from "zod";
const collectionSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    unique: true,
  },
  description: String,
  image: {
    type: String,
    require: true,
  },
  products:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
    }
  ],
  createAt:{
    type:Date,
    default:Date.now
  },
  updateAt:{
    type:Date,
    default:Date.now
  }
});
const Collection =mongoose.models.Collection || mongoose.model("Collection",collectionSchema);
export default Collection;