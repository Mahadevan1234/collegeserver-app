const express=require("express")
const bcrypt=require("bcryptjs")
const { genSalt } = require("bcrypt")
const studentModel = require("../models/studentModel")
const markmodel=require("../models/marksmodel")

const router=express.Router()

hashedPassword=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/addstudent",async(req,res)=>{
    let {data}={"data":req.body}
    let password=data.password
    hashedPassword(password).then(
        (hashpass)=>{
            console.log(hashpass)
            data.password=hashpass
            console.log(data)
            let student=new studentModel(data)
            let result=student.save()
            res.json({
                status:"success"
            })
        }
    )
})

router.get("/viewall",async(req,res)=>{
    let data=await studentModel.find()
    res.json(data)
})

router.get("/viewmarks",async(req,res)=>{
    let result=await markmodel.find()
    .populate().exec()
    res.json(result)
})

module.exports=router