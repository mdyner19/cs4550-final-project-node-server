import express from 'express';
import cors from "cors";
import UserRoutes from './users/routes.js';
import mongoose from "mongoose";
import session from "express-session";
import "dotenv/config";
import StartggWorker from './Startgg/StartggWorker.js';
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
mongoose.connect(CONNECTION_STRING, {
    dbName: 'cs4550FinalProject', 
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
const app = express();
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL
  })
);
const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}
app.use(session(sessionOptions));
app.use(express.json());
app.get('/', (req, res) => {
    res.send('CS4550 Final Project api')
})
UserRoutes(app);
StartggWorker(app);
app.listen(process.env.PORT || 4000);


