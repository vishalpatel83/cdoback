import RolesModel from "../models/RolesModel.js";
import RoleModuleController from "./roleModuleController.js";
class RolesController {
  static createRole = async (req, res) => {
    try {
      const doc = new RolesModel(req.body);
      const result = await doc.save();
      RoleModuleController.createRoleModuleByRole(result);
      res.status(201).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error });
    }
  };

  //Get All Role
  static getAllRoles = async (req, res) => {
    try {
      const result = await RolesModel.find();
      res.status(200).send(result);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };

  //Get Single Role
  static getSingleRole = async (req, res) => {
    try {
      const result = await RolesModel.findById(req.params.id);
      res.status(200).send(result);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };

  //UPDATE ROLES
  // static updateRole = async (req, res) => {
  //   try {
  //     const Role = await RolesModel.findById(req.params.id);
  //     const role = {
  //       RoleName: req.body.RoleName || Role.RoleName,
  //       isActive: req.body.isActive || Role.isActive,
  //       Created_By: req.body.Created_By || Role.Created_By,
  //       Updated_By: req.body.Updated_By || Role.Updated_By,
  //     };
  //     const updatedRole = await RolesModel.updateOne(role);
  //     res.status(200).json({
  //       "Upadated Role": updatedRole,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //     res.status(400).json({
  //       err: err,
  //     });
  //   }
  // };

  static updateRole = async (req, res) => {
    try {
      const result = await RolesModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.status(200).send(result);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };

  //Delete Role
  static deleteRole = async (req, res) => {
    try {
      const result = await RolesModel.findByIdAndDelete(req.params.id);
      // console.log(result);
      RoleModuleController.deleteRoleModuleByRoleId(result);
      res.status(204).send(result);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };
}

export default RolesController;
