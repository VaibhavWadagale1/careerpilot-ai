const express = require('express')
const dotEnv =require('dotenv')
const Path = require('path')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const multer  = require('multer')
const  rateLimit = require('express-rate-limit')
const limiter = rateLimit({
  windowMs:10*60*1000,
  max:50,
  message:"Too Many Request"
})
const app = express()
app.use(express.json())
app.use(morgan("dev"))
app.use(cors({
  origin:"http://localhost:5173"
}))
dotEnv.config()
const upload = multer({
  dest:"./uploads"
})
app.use('/upload',express.static(Path.join(__dirname, 'uploads')))

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);

    console.log("MongoDB Connected Successfully");

    app.listen(process.env.PORT, () => {
      console.log(`Server Is Running on ${process.env.PORT} port.`);
    });
  } catch (error) {
    console.error("MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};

dbConnection(); 

const authRouter = require('./routers/authRouter.js')
const jobRouter = require('./routers/JobRouter.js')
app.use('/',authRouter)
app.use('/jobs', jobRouter)

module.exports = app;