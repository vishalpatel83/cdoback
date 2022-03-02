import Rolemodule from "../models/rolemodule.js";
import RolesModel from "../models/RolesModel.js";
import ModuleModel from "../models/Module.js";
class RoleModuleController {
  static getAllRoleModule = async (req, res) => {
    try {
      const roleModules = await Rolemodule.find()
        .populate({
          path: "Module_Id",
          select: "Module_Name",
        })
        .populate({
          path: "SubModule_Id",
          select: "SM_Name",
        })
        .populate({
          path: "Role_Id",
          select: "RoleName",
        })
        .sort({ Role_Id: 1 });
      res.status(200).json(roleModules);
    } catch (err) {
      res.status(404).json({
        error: err,
      });
    }
  };

  static createRoleModuleByRole = async (role) => {
    const rolemodules = await ModuleModel.aggregate([
      {
        $lookup: {
          from: "submodules",
          localField: "_id",
          foreignField: "Module_Id",
          as: "modulesubModule",
        },
      },
      { $unwind: "$modulesubModule" },
      {
        $project: {
          _id: 0,
          Role_Id: role._id,
          Module_Id: "$_id",
          SubModule_Id: "$modulesubModule._id",
        },
      },
      { $set: { View: false, Add: false, Edit: false, Delete: false } },
    ]);
    console.log(rolemodules);
    rolemodules.forEach((rolemodule) => {
      const doc = new Rolemodule(rolemodule);
      doc.save().then((res) => console.log(res));
    });
  };

  static createRoleModuleBySubModule = async (subModule) => {
    console.log("createRoleModuleBySubModule", subModule);
    const rolemodules = await RolesModel.aggregate([
      {
        $project: {
          _id: 0,
          Role_Id: "$_id",
          Module_Id: subModule.Module_Id,
          SubModule_Id: subModule._id,
        },
      },
      { $set: { View: false, Add: false, Edit: false, Delete: false } },
    ]);
    // console.log("rolemodules", rolemodules);
    rolemodules.forEach((rolemodule) => {
      const doc = new Rolemodule(rolemodule);
      doc.save().then((res) => console.log(res));
    });
  };

  static getSomeRoleModuleByRoleIdAndModuleId = async (req, res) => {
    const { roleId, moduleId } = req.params;
    try {
      const result = await (
        await Rolemodule.find()
          .populate({
            path: "Module_Id",
            select: "Module_Name",
          })
          .populate({
            path: "SubModule_Id",
            select: "SM_Name",
          })
          .populate({
            path: "Role_Id",
            select: "RoleName",
          })
      ).filter(
        (rolemodule) =>
          (rolemodule.Role_Id._id == roleId) &
          (rolemodule.Module_Id._id == moduleId)
      );
      // console.log(result);
      res.status(200).send(result);
    } catch (error) {
      res.status(404).json({ error: error });
    }
  };

  static getSomeRoleModulebyRoleId = async (req, res) => {
    try {
      const result = await Rolemodule.find({
        Role_Id: req.params.roleId,
      })
        .populate({ path: "Role_Id", select: "RoleName" })
        .populate({ path: "Module_Id", select: "Module_Name" })
        .populate({ path: "SubModule_Id", select: "SM_Name" });
      res.status(200).send(result);
    } catch (error) {
      res.status(404).json({ error: error });
    }
  };

  static getSomeRoleModuleByModuleId = async (req, res) => {
    try {
      const result = await Rolemodule.find({ Module_Id: req.params.moduleId })
        .populate({ path: "Role_Id", select: "RoleName" })
        .populate({ path: "Module_Id", select: "Module_Name" })
        .populate({ path: "SubModule_Id", select: "SM_Name" });
      res.status(200).send(result);
    } catch (error) {
      res.status(404).json({ error: error });
    }
  };

  static updateRoleModuleById = async (req, res) => {
    try {
      const updateRoleModule = await Rolemodule.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

      res.status(200).json({
        "updated rolemodule": updateRoleModule,
      });
    } catch (err) {
      res.status(400).json({
        err: err,
      });
    }
  };

  static deleteRoleModuleByRoleId = async (role) => {
    console.log("delete Role", role);
    const result = await Rolemodule.deleteMany({ Role_Id: role._id });
    console.log("Deleted Successfully", result);
  };

  static deleteRoleModuleByModuleId = async (module) => {
    console.log("delete Role", module);
    const result = await Rolemodule.deleteMany({ Module_Id: module._id });
    console.log("Deleted Successfully", result);
  };

  static deleteRoleModuleBySubModuleId = async (subModule) => {
    console.log("delete Role", subModule);
    const result = await Rolemodule.deleteMany({ SubModule_Id: subModule._id });
    console.log("Deleted Successfully", result);
  };
}

export default RoleModuleController;
