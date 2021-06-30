const mongoose = require("mongoose")

const jobSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    workType:{
        type:String,
        required:true
    },
    remote:{
        type:Boolean,
        default:false
    },
    duration:{
        type:String,
        required:true
    },
    stipend:{
        type:Number,
    },
    applyBy:{
        type :Date,
        required:true
    },
    startedBy:{
        type:Date,
    },
    skills:{
        type:[String],
    },
    jobDiscription:{
        type:String,
        required:true
    },
    totalOpening:{
        type:Number,
        required:true
    },
    applications:[
        {
            userName:{type:String,required:true},
            email:{type:String,required:true},
            skills:{type:[String],required:true},
            contactNumber:{type:Number,required:true},
            resume:{type:String,required:true}
        }
    ]
});

jobSchema.pre('save',function(next){
    // console.log('going to save',this)
    const date = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"})
    console.log(date.toString())
    this.startedBy = date
    next();
})

const Job = mongoose.model("Job",jobSchema)

module.exports = Job