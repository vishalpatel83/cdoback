import UserRoleModel from "../models/UserRole.js";
class UserRoleController {
  static createUserRoleModel = async (req, res) => {
    try {
      const doc = new UserRoleModel(req.body);
      const result = await doc.save();

      res.status(201).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error });
    }
  };

  static getAllUserRoleModel = async (req, res) => {
    try {
      const result = await UserRoleModel.find();
      res.status(200).send(result);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };

  static getSingleUserRoleModelById = async (req, res) => {
    try {
      const result = await UserRoleModel.findById(req.params.id);
      res.status(200).send(result);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };

  static updateUserRoleModelById = async (req, res) => {
    try {
      const result = await UserRoleModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error });
    }
  };

  static deleteUserRoleModelById = async (req, res) => {
    try {
      const result = await UserRoleModel.findByIdAndDelete(req.params.id);
      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error });
    }
  };
}

export default UserRoleController;
