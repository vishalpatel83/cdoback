import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;
const rolemoduleSchema = new mongoose.Schema({
  Role_Id: {
    type: ObjectId,
    ref: "Role",
  },
  Module_Id: {
    type: ObjectId,
    ref: "Module",
  },
  SubModule_Id: {
    type: ObjectId,
    ref: "subModule",
  },
  View: {
    type: Boolean,
    required: true,
  },
  Add: {
    type: Boolean,
    required: true,
  },
  Edit: {
    type: Boolean,
    required: true,
  },
  Delete: {
    type: Boolean,
    required: true,
  },
});

const Rolemodule = mongoose.model("Rolemodule", rolemoduleSchema);
export default Rolemodule;
