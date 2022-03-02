import SubModuleModel from "../models/subModuleModel.js";
import RoleModuleController from "./roleModuleController.js";
class SubModuleController {
  static getAllSubModules = async (req, res) => {
    try {
      const result = await SubModuleModel.find()
        .populate({
          path: "Module_Id",
          select: "Module_Name",
        })
        .sort({ Module_Id: 1 });
      res.status(200).send(result);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };

  static getSubModulesByModuleId = async (req, res) => {
    const { id } = req.params;
    try {
      const result = await (
        await SubModuleModel.find().populate({
          path: "Module_Id",
          select: "Module_Name",
        })
      ).filter((submodule) => submodule.Module_Id._id == id);
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(404).json({ message: "Requested ID Not Found" });
      }
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };

  static getSingleSubModule = async (req, res) => {
    try {
      const result = await SubModuleModel.findById(req.params.id).populate({
        path: "Module_Id",
        select: "Module_Name",
      });
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(404).json({ message: "Requested ID Not Found" });
      }
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };

  static createSubModule = async (req, res) => {
    try {
      // console.log(req.body);
      const submodule = new SubModuleModel(req.body);
      const result = await submodule.save();
      RoleModuleController.createRoleModuleBySubModule(result);
      res.status(201).send(result);
    } catch (error) {
      res.send(400).json({ error: error });
    }
  };

  static updateSubModuleById = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await SubModuleModel.findByIdAndUpdate(
        { _id: id },
        req.body,
        { new: true }
      );
      // console.log(result);
      res.status(200).send(result);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };

  static deleteSubModuleById = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await SubModuleModel.findByIdAndDelete(id);
      RoleModuleController.deleteRoleModuleBySubModuleId(result);
      res.status(200).json({ message: "SubModule Deleted Successfully" });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error });
    }
  };

  static deleteSubModuleByModuleId = async (module) => {
    const result = await SubModuleModel.deleteMany({ Module_Id: module._id });
    console.log("deleted successfully", module);
  };
}

export default SubModuleController;
