const mongoose=require("mongoose")

const markschema=new mongoose.Schema(
    {
        studentid:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"addstudent"},
        maths:{
            type:String,
            required:true},
        python:{
            type:String,
            required:true},
        C:{
            type:String,
            required:true},
        java:{
            type:String,
            required:true},
        android:{
            type:String,
            required:true}
    }
)

module.exports=mongoose.model("marks",markschema)