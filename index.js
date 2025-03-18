import express from "express";
import morgan from "morgan";
import dotenv from  'dotenv'
import mysqlpool from "./config/db.js";
import studentroute from './routes/studentroute.js'
dotenv.config()
const app = express();

app.use(morgan("dev"))
app.use(express.json())



app.use('/api',studentroute)

mysqlpool.query('SELECT 1').then(()=>{
  console.log('mysql db connected')
}).catch(()=>{
  console.log('error')
})
const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(` server is running ${port}`);
});
