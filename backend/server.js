import express from "express"
import connectDB from "./config";
import "dotenv/config";
const app=express();

app.use(express.json());

app.use(cors());
dotenv.config();

connectDB();

app.get("/",(req,res)=>{
  res.send("Note Management api is running");
});

app.use("/api/notes",noteRoutes);
const PORT= process.env.PORT||5000;

app.listen(PORT,()=>{
  console.log(`server running on port ${PORT}`);
})