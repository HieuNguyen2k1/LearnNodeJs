import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({
    id:{
        type : String,
        unique : true,
    },
    name:{
        type : String
    },
    numberOfStaff : {
        type : Number
    }
},
{
  versionKey: false 
});

export default  mongoose.model("Department",departmentSchema);