import Employee from "../model/employee.js";
import { putDepartment } from "./departmentController.js";

export const getEmployees = async(req, res) => {
    try {
        const data = await Employee.find();
        res.status(200).json(data);
    } catch (error) {
        console.log("Get Employee Error!");
    }
};

export const postEmployee = async (req, res) => {
    try {
        const data = await Employee(req.body).save();
        
        if (req.body.departmentId) {
            await putDepartment({ query: { departmentId: req.body.departmentId } });
        } else{
            console.log("Department Id not found!");
        }
        res.status(201).json(data);
    } catch (error) {
        console.error("Add Employee Error:", error);
        res.status(500).send("Internal Server Error");
    }
};

export const deleteEmployee = async (req, res) => {
    try {
        const deletedEmployee = await Employee.deleteOne({id :req.query.id});
        
        res.status(200).send("Employee deleted successfully!"); 
    } catch (error) {
        console.log("Delete Employee Error!");
    }
};

export const putEmployee = async (req, res) => {
    try {
        
        const data = await Employee.updateOne({id : req.query.id}, {$set : req.body});
        
        res.status(200).json(data); 
    } catch (error) {
       console.log("Upade Employee!");
    }
};