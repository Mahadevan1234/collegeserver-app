const express=require("express")
const bcrypt=require("bcryptjs")
const studentModel = require("../models/studentModel")
const marksmodel = require("../models/marksmodel")

const router=express.Router()

router.post("/studlogin",async(req,res)=>{
    let studmail=req.body.emailid
    let studpass=req.body.password
    let data=await studentModel.findOne({"emailid":studmail})
    if (!data) {
        return res.json(
            {
                status:"Invalid Email"
            }
        )
    }
    let dbpass=data.password
    const match=await bcrypt.compare(studpass,dbpass)
    if (!match) {
        return res.json(
            {
                status:"Incorrect Password"
            }
        )
    } else {
        return res.json(
            {
                status:"success"
            }
        )
    }
})

router.post("/addmarks",async(req,res)=>{
    let input=req.body
    let marks=new marksmodel(input)
    let result=await marks.save()
    res.json({
        status:"success"
    })
})

module.exports=router