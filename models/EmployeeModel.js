import mongoose from "mongoose";
const employeeSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    trim: true,
    default: null,
  },
  LastName: {
    type: String,
    trim: true,
    default: null,
  },
  Gender: {
    type: Boolean,
    trim: true,
    default: null,
  },
  Email: {
    type: String,
    trim: true,
    default: null,
  },
  Contact: {
    type: Number,
    minlength: 10,
    maxlength: 10,
    trim: true,
    default: null,
  },
  Address: {
    type: String,
    trim: true,
    default: null,
  },
});

const EmployeeModel = mongoose.model("Employee", employeeSchema);
export default EmployeeModel;
