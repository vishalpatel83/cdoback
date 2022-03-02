import express from "express";
import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;
const UserRoleSchema = new mongoose.Schema({
  User_Id: {
    type: ObjectId,
    ref: "Users",
  },
  Role_Id: {
    type: ObjectId,
    ref: "Role",
  },
});
const UserRoleModel = mongoose.model("UserRole", UserRoleSchema);
export default UserRoleModel;
