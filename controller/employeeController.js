import Employee from "../model/employee.js"; // Ensure the correct case for the model

export const getEmployees = async(req, res) => {
    try {
        const data = await Employee.find();
        res.status(200).json(data);
    } catch (error) {
        console.error("Error get all employee:", error);
        res.status(500).send("An error occurred while creating the employee!");
    }
};

export const postEmployee = async (req, res) => {
    try {
        const data = await Employee(req.body).save(); 
        res.status(201).json(data);
    } catch (error) {
        console.error("Error creating employee:", error);
        res.status(500).send("An error occurred while creating the employee!");
    }
};

export const deleteEmployee = async (req, res) => {
    try {
        const deletedEmployee = await Employee.deleteOne({id :req.query.id});
        if (!deletedEmployee) {
            return res.status(404).send("Employee not found!");
        }
        res.status(200).send("Employee deleted successfully!"); 
    } catch (error) {
        res.status(500).send("An error occurred while deleting the employee!");
    }
};

export const putEmployee = async (req, res) => {
    try {
        
        const data = await Employee.updateOne({id : req.query.id}, {$set : req.body});
        if (!data) {
            return res.status(404).send("Employee not found!");     
        }
        res.status(200).json(data); 
    } catch (error) {
        res.status(500).send("An error occurred while updating the employee!");
    }
};