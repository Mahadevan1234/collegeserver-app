const express=require("express")
const bcrypt=require("bcryptjs")
const { genSalt } = require("bcrypt")
const studentModel = require("../models/studentModel")

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

module.exports=router