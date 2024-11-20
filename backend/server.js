import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'

//app config
const app =express()
const port =4000

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
    
})

//mongodb://arunlalto:<db_password>@<hostname>/?ssl=true&replicaSet=atlas-u4kc99-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0