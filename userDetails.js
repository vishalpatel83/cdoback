import UserModel from "./models/users.js";
const userDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const userDetails = await (
      await UserModel.aggregate([
        {
          $lookup: {
            from: "rolemodules",
            localField: "Role_Id",
            foreignField: "Role_Id",
            as: "rolemodules",
          },
        },
        {
          $unwind: {
            path: "$rolemodules",
          },
        },
        {
          $lookup: {
            from: "roles",
            localField: "rolemodules.Role_Id",
            foreignField: "_id",
            as: "roles",
          },
        },
        {
          $unwind: {
            path: "$roles",
          },
        },
        {
          $lookup: {
            from: "modules",
            localField: "rolemodules.Module_Id",
            foreignField: "_id",
            as: "modules",
          },
        },
        {
          $unwind: {
            path: "$modules",
          },
        },
        {
          $lookup: {
            from: "submodules",
            localField: "rolemodules.SubModule_Id",
            foreignField: "_id",
            as: "submodules",
          },
        },
        {
          $unwind: {
            path: "$submodules",
          },
        },
        {
          $group: {
            _id: "$_id",
            AD_Id: { $first: "$AD_Id" },
            AD_Email: { $first: "$AD_Email" },
            E_Id: { $first: "$E_Id" },
            Role_Id: { $first: "$Role_Id" },
            Rolemodules: {
              $push: {
                _id: "$rolemodules._id",
                Role_Id: "$rolemodules.Role_Id",
                Role_Name: "$roles.RoleName",
                Module_Id: "$rolemodules.Module_Id",
                Module_Name: "$modules.Module_Name",
                SubModule_Id: "$rolemodules.SubModule_Id",
                SubModule_Name: "$submodules.SM_Name",
                Route: "$submodules.Route",
                View: "$rolemodules.View",
                Add: "$rolemodules.Add",
                Edit: "$rolemodules.Edit",
                Delete: "$rolemodules.Delete",
              },
            },
            Modules: { $addToSet: "$modules" },
            // SubModules: { $addToSet: "$submodules" },
          },
        },
      ])
    ).filter((user) => user.AD_Id === id);
    console.log(userDetails);
    res.status(200).send(userDetails);
  } catch (error) {
    // console.log(error);
    res.status(400).json({ error: error });
  }
};
export default userDetails;
