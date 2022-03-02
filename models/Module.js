import express from "express";
import mongoose from "mongoose";
//models
const moduleSchema = new mongoose.Schema(
  {
    Module_Name: {
      type: String,
      requierd: true,
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
const ModuleModel = mongoose.model("Module", moduleSchema);
export default ModuleModel;
