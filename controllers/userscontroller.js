import Usersmodels from "../models/users.js";
class UsersController {
  // CREATE USERs
  static createUser = async (req, res) => {
    try {
      const users = new Usersmodels(req.body);
      const ceratedusers = await users.save();
      res.status(201).json(ceratedusers);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error });
    }
  };
  // GET ALL USERS
  static getAllUsers = async (req, res) => {
    try {
      //populate
      const result = await Usersmodels.find().populate({
        path: "E_Id",
      });
      // const allUsers=await Usersmodels.find()
      res.status(200).json(result);
    } catch (err) {
      res.status(400).json({
        error: "user Not Found",
      });
    }
  };
  static getUserByAdId = async (req, res) => {
    try {
      const result = await Usersmodels.findOne({
        AD_Id: req.params.Ad_Id,
      }).populate({ path: "E_Id" });
      res.status(200).send(result);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };
  //GET USERBYID
  static getUserById = async (req, res) => {
    const { id } = req.params;
    try {
      const result = await Usersmodels.findById(id)
        .populate({
          path: "E_Id",
        })
        .populate({
          path: "Role_Id",
        });
      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error });
    }
  };
  //find user by AD_Email
  static getUserByAdEmail = async (req, res) => {
    const { adEmail } = req.params;
    try {
      const result = await Usersmodels.find({ AD_Email: adEmail }).populate({
        path: "E_ID",
      });
      res.status(200).send(result);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };
  //DELETE BY USERID
  static deleteUserById = async (req, res) => {
    try {
      const deleteUser = await Usersmodels.findByIdAndDelete(req.params.id);
      res.status(200).json({
        user: deleteUser,
      });
    } catch (err) {
      res.status(400).json({
        deleteuser: "user not deleted",
      });
    }
  };
  //UPDATE USER BY ID
  static updateUserById = async (req, res) => {
    try {
      const updateuser = await Usersmodels.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      // const User={
      //   AD_id:req.body.AD_id ||user.AD_id,
      //   AD_Email:req.body.AD_Email||user.AD_Email,
      //   E_id:req.body.E_id||user.E_id,
      //   created_By:req.body.created_By||user.created_By,
      //   updated_By:req.body.updated_By||user.updated_By
      // }
      // const updatedUser=await Usersmodels.updateOne(User)
      res.status(200).json({
        "updated user": updateuser,
      });
    } catch (err) {
      res.status(400).json({
        error: err,
      });
    }
  };
}

export default UsersController;
