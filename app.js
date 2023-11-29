import express from 'express';
import cors from "cors";
import StartggWorker from './Startgg/StartggWorker.js';
const app = express();
app.use(cors());
StartggWorker(app);
app.listen(4000);