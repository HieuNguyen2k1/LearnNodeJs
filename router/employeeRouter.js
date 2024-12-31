import express from 'express';
import { deleteEmployee, getEmployees, postEmployee, putEmployee } from '../controller/employeeController.js';

const router = express.Router();


router.get('/employees', getEmployees);
router.post('/employees', postEmployee);
router.put('/employees', putEmployee);
router.delete('/employees', deleteEmployee);


export default router;