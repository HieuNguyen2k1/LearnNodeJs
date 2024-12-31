import Department from '../model/department.js';

export const getDepartments = async(req , res )=>{
    try {
        const data =  await Department.find();
        res.status(201).json(data);
    } catch (error) {
        console.log(error);
    }
};
export const postDepartment = async(req , res )=>{
    try {
        const data = await Department(req.body).save();
        res.status(201).json(data);
    } catch (error) {
        console.log(error);
    }
};
export const deleteDepartment = async(req , res )=>{
  try {
    console.log(req.query.id);
    const data =  await Department.deleteOne({id: req.query.id});
    if (!data) {
        return res.status(404).send("department not found!");
    }
    res.status(200).send("department deleted successfully!"); 
  } catch (error) {
    console.log(error + 'delete department!');
  }
};

export const putDepartment = async(req , res )=>{
    try {
        
        const data =  await Department.updateOne({id:req.query.id},{$set : req.body});
        if (!data) {
            return res.status(404).send("department not found!"); 
        }
        res.status(200).json(data); 
      } catch (error) {
        res.status(500).send("An error occurred while updating the department!");
      }
};