const express = require("express");
const dotenv = require("dotenv");
const { userRouter } = require("./routes/user");

dotenv.config('./.env');

const app = express();

app.use(express.json());

app.use("/user", userRouter)


app.listen(process.env.PORT || 3000)