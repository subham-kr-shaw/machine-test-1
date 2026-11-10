import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODBURI);
    console.log("mongodb connect");
  } catch (error) {
    console.log(error.message);
  }
};
export default connectDB;
