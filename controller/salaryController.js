import Employee from '../model/employee.js';

export const getSalary = async(req ,res ) =>{
    try {
        const data = await Employee.find();
       const newData =  calculatorSalary(data);
       res.status(201).json(newData);
    } catch (error) {
        console.log(error);
    }
};

const calculatorSalary = (employees) =>{
    
  return  employees.map((element) => {
        return ({
            id : element.id,
            salaryScale : element.salaryScale,
            overTime : element.overTime,
            totalSalary : Math.round(element.salaryScale * 3000000 + element.overTime * 200000 )
        });
    });
}