import express from "express";
import connectDB from "./db/connectdb.js";

import subModule from "./routes/subModule.js";
import Employee from "./routes/Employee.js";
import Roles from "./routes/Roles.js";
import users from "./routes/users.js";
import module from "./routes/module.js";
import userrole from "./routes/UserRole.js";
import rolemodule from "./routes/roleModule.js";
import bodyParser from "body-parser";
import cors from "cors";
import checkAuth from "./middlewares/checkAuth.js";
import UserDetails from "./userDetails.js";

const app = express();
const port = process.env.PORT || 8000;
const DB_URL = process.env.DB_URL;

//Database Connection
connectDB(DB_URL);

// app.use(bodyParser.urlencoded({ extended: false }));
//HERE IS PERMISSION FOR THE ACCESS DATA FROM DIFFERNT ORIGIN HERE IS ORIGIN REACT APP:LOCALHOST:3000
const corsOptions = {
  origin: process.env.BASE_URL_REACT_APP,
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(checkAuth);
app.use(bodyParser.json());
app.use(express.json());

app.use("/employees", Employee);
app.use("/users", users);
app.use("/modules", module);
app.use("/submodules", subModule);
app.use("/roles", Roles);
app.use("/rolemodules", rolemodule);
app.use("/userroles", userrole);

app.get("/userdetails/:id", UserDetails);

app.listen(port, () => {
  console.log(`Server Listening at ${process.env.BASE_URL_API}`);
});
