const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
//Connect to DB
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true }, () =>
  console.log("MongoDB Success")
);

// Import Routes
const authRoute = require("./routes/auth");

//body parser/ middle ware
app.use(express.json());

//Route Middlewares
app.use("/api/user", authRoute);

app.listen(3000, () => console.log("Running on Port 3000"));
