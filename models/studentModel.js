const mongoose=require("mongoose")

const studentschema=new mongoose.Schema(
    {
        name:{type:String,
            required:true},
        rollno:{type:String,
            required:true},
        admnno:{type:String,
            required:true},
        collegename:{type:String,
            required:true},
        parentname:{type:String,
            required:true},
        mobilenum:{type:String,
            required:true},
        emailid:{type:String,
            required:true},
        password:{type:String,
            required:true}
    }
)

module.exports=mongoose.model("students",studentschema)