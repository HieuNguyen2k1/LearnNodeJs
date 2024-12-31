import express from 'express';
import { deleteDepartment, getDepartments, postDepartment, putDepartment } from '../controller/departmentController.js';

const route = express.Router();

route.get('/department', getDepartments);
route.post('/department', postDepartment);
route.put('/department', putDepartment);
route.delete('/department', deleteDepartment);

export default route;