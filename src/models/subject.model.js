import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  code: String,              
  name: String,             
  department: String,        
  semester: Number,        
  category: {                
    type: String,
    enum: ["CORE", "PROFESSIONAL_ELECTIVE", "OPEN_ELECTIVE"],
    required: true
  },
  credits:Number
});

const Subject= mongoose.model("Subject", subjectSchema);
export default Subject;