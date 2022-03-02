//Employee Controller
import EmployeeModel from "../models/EmployeeModel.js";

class EmployeeController {
  //Create Employee
  static createEmployee = async (req, res) => {
    try {
      const doc = new EmployeeModel(req.body);
      //Save Employee
      const result = await doc.save();
      //   console.log(result);
      res.status(201).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error });
    }
  };

  // Get All Employee
  static getAllEmployee = async (req, res) => {
    try {
      const result = await EmployeeModel.find();
      res.status(200).send(result);
    } catch (error) {
      res.send(204);
    }
  };

  // Get Single Employee
  static getSingleEmployee = async (req, res) => {
    try {
      const result = await EmployeeModel.findById(req.params.id);
      res.status(200).send(result);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };

  // Update Employee
  static updateEmployee = async (req, res) => {
    try {
      const result = await EmployeeModel.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
      res.status(400).json({
        error: err,
      });
    }
  };

  // Delete Employee
  static deleteEmployee = async (req, res) => {
    try {
      const result = await EmployeeModel.findByIdAndDelete(req.params.id);
      // console.log(result);
      res.status(204).send(result);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };
}

export default EmployeeController;
