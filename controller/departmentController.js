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
    
    res.status(200).send("department deleted successfully!"); 
  } catch (error) {
    console.error('delete department error!');
  }
};

export const putDepartment = async (req, res) => {
  try {
      const departmentId = req.query.departmentId;

      if (departmentId) {
          const department = await Department.findOne({ id: departmentId });
          console.log("Department found: ", department);
          
          if (department) {
              const i = department.numberOfStaff +1;
              console.log("count number" + i);
              const updatedData = await Department.updateOne(
                  { id: departmentId },
                  { $set: { numberOfStaff:  i } }
              );
          } else {
              console.log("Department not found!");
          }
      } else {
          const updatedData = await Department.updateOne(
              { id: req.query.id },
              { $set: req.body }
          );
          res.status(200).json(updatedData);
      }
  } catch (error) {
      console.error("Department update error:", error);
      res.status(500).send("Internal Server Error");
  }
};

