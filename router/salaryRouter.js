import express from 'express';
import { getSalary } from '../controller/salaryController.js';

const route = express.Router();

route.get('/salary',getSalary);

export default route;