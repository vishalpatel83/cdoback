import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;
const userSchema = new mongoose.Schema(
  {
    AD_Id: {
      type: String,
      required: true,
    },
    AD_Email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    E_Id: {
      type: ObjectId,
      ref: "Employee",
      required: true,
    },
    Role_Id: {
      type: ObjectId,
      ref: "Role",
      default: null,
    },
    isActive: {
      tyep: Boolean,
      default: false,
    },
    created_By: {
      type: String,
      default: null,
    },
    updated_By: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

const Usersmodels = mongoose.model("Users", userSchema);
export default Usersmodels;
