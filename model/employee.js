import mongoose from "mongoose";
import AutoIncrement from "mongoose-sequence";
const autoIncrement = AutoIncrement(mongoose); 

const employeeSchema = new mongoose.Schema({
  id:{
    type : Number,
    unique: true,
  },
  name: {
    type: String,
  },
  doB: {
    type: Date,
  },
  salaryScale: {
    type: Number,
  },
  startDate: {
    type: Date,
  },
  departmentId: {
    type: String,
    ref: "Department",
    require:true
  },
  annualLeave: {
    type: Number,
  },
  overTime: {
    type: Number,
  },
  image: {
    type: String,
  },
},
{
  versionKey: false 
});


employeeSchema.plugin(autoIncrement, { inc_field: 'id' });
export default mongoose.model("Employee",employeeSchema);