//require('dotenv').config({path:'./env'})
// import dotenv from "dotenv"

// import connectDB from "./db/index.js";
 

// dotenv.config({
//   path:'./env'
// })
// connectDB()
// .then(()=>{
//   app.listen(process.env.PORT ||8000,()=>{
//     console.log(`Server is running at port:${process.env,PORT}`);
//   })
// })
// .catch((err)=>{console.log("MONGO db connection failed!!!",err);

// })
import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

// Load environment variables
dotenv.config({ path: "./env" });

// Initialize Express app (Fix: Define `app` before using it)
const app = express();

// Connect to MongoDB
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed!!!", err);
  });

export default app; // (Optional: If you need to import `app` elsewhere)












/*import express from "express";




const app=express()

(async()=>{
  try{
        await mongoose.conntect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
          console.log("ERRR:",error);
          throw error
        })
        app.listen(process.env.PORT,()=>{
          console.log(`App is listening on port ${process.env.PORT}`);
        })
  }
  catch(error){
    console.log("ERROR:",error)
    throw err
  }
})()*/