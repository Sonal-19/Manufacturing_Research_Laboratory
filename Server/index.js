const express = require("express");
const dotenv = require("dotenv");
const emailRoutes = require("./Routes/emailRoutes");

const app = express();
dotenv.config();

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors()); // Use this after the variable declaration

app.use(express.json()); // tell the server to accept the json data from frontend

app.use("/email", emailRoutes);


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Manufactuing Research Laboratory Server is running at port ${PORT}`);
});