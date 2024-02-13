const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const adminroute=require("./controllers/adminRouter")
const markroute=require("./controllers/studentRouter")

//alias name
const app=express()

//middleware
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://mahi17700:mahi123@cluster0.6apodnl.mongodb.net/collegeadminDb?retryWrites=true&w=majority",
{useNewURLParser:true})

//routing
app.use("/api/admin",adminroute)
app.use("/api/student",markroute)

app.listen(4000,()=>{
    console.log("server running...")
})