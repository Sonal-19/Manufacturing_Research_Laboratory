const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT;
const router = require("./Routes/index");

app.use(express.json());
app.use(
  cors({
    credentials: true,
    methods: ["GET", "POST"],
    origin: " http://localhost:5173",
  })
);

app.use("/api", router);

app.listen(port, () => {
  console.log(
    `Manufactuing Research Laboratory Server is running at port ${port}`
  );
});
