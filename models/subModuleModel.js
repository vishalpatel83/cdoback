import mongoose from "mongoose";

const subModuleSchema = new mongoose.Schema(
  {
    Module_Id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Module",
      require: true,
    },
    SM_Name: {
      type: String,
      require: true,
      trim: true,
    },
    Route: {
      type: String,
      require: true,
      trim: true,
    },
    isActive: {
      type: Boolean,
      require: true,
      default: false,
    },
    Created_By: {
      type: String,
      default: null,
    },
    Updated_By: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

const SubModuleModel = mongoose.model("subModule", subModuleSchema);

export default SubModuleModel;
