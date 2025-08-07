const express = require("express");
const dotenv = require("dotenv");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const mongoose = require("mongoose");

dotenv.config('./.env');

const app = express();

app.use(express.json());

app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/admin", adminRouter);

mongoose
    .connect(process.env.MONGO_URL)
    .then(() =>
        app.listen(process.env.PORT, () =>
            console.log(`Server Running on Port: http://localhost:${process.env.PORT}`)
        )
    )
    .catch((error) => console.log(`${error} did not connect`));

app.listen(process.env.PORT || 3000)