import dotenv from 'dotenv';
import express from 'express';
import { connectDb } from './config/db.js';
import departmentRouter from './router/departmentRouter.js';
import employeeRouter from './router/employeeRouter.js';
import salaryRouter from './router/salaryRouter.js';

dotenv.config();
const app = express();

app.use(express.json());
connectDb(process.env.DB_Uri);
app.use("/api", employeeRouter);
app.use("/api", departmentRouter);
app.use("/api", salaryRouter);
app.listen(8080, () => {
    console.log("Máy chủ đang chạy trên http://localhost:8080");
});