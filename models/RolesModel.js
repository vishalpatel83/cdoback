import mongoose from "mongoose";

const rolesSchema = new mongoose.Schema(
  {
    RoleName: {
      type: String,
      required: true,
      trim: true,
    },
    isActive: {
      type: Boolean,
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

const RolesModel = mongoose.model("Role", rolesSchema);

export default RolesModel;
