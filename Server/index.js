const express = require("express");
const dotenv = require("dotenv");
const emailRoutes = require("./Routes/emailRoutes");

const app = express();
dotenv.config();

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, 
  optionSuccessStatus: 200,
};

app.use(cors()); 

app.get("/",(req, res)=>{
  res.send("hello world")
})

app.use(express.json()); 
app.use("/email", emailRoutes);


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Manufactuing Research Laboratory Server is running at port ${PORT}`);
});