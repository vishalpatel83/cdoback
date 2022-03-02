import Module from "../models/Module.js";
import SubModuleController from "./SubModuleController.js";
import RoleModuleController from "./roleModuleController.js";
class moduleController {
  //create module
  static createModule = async (req, res) => {
    try {
      const doc = new Module(req.body);
      const result = await doc.save();
      res.status(201).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error });
    }
  };

  static getAllModule = async (req, res) => {
    try {
      const result = await Module.find();
      res.status(200).send(result);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };

  static getSingleModuleById = async (req, res) => {
    try {
      const result = await Module.findById(req.params.id);
      res.status(200).send(result);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };

  static updateModuleById = async (req, res) => {
    try {
      const result = await Module.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).send(result);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };

  static deleteModuleById = async (req, res) => {
    try {
      const result = await Module.findByIdAndDelete(req.params.id);
      SubModuleController.deleteSubModuleByModuleId(result);
      RoleModuleController.deleteRoleModuleByModuleId(result);
      res.status(200).send(result);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };
}

export default moduleController;
