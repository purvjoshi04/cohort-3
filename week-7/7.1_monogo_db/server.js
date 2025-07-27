import express from "express";
import { UserModel, TodoModel } from "./db.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import { auth } from "./middleware.js"

dotenv.config({ path: './.env' })


mongoose.connect(process.env.mongodb_url)

const app = express();
app.use(express.json())

app.post("/signup", async (req, res) => {
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;

    await UserModel.create({
        email,
        name,
        password
    });
    res.json({
        message: "You are signed up!"
    })
})

app.post("/signin", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password
    });

    if (user) {
        const token = jwt.sign({ id: user._id.toString() }, process.env.JWT_SECRET);
        res.json({
            token: token
        })
    } else {
        res.status(403).json({
            message: "Wrong credentials!"
        })
    }
});

app.post("/todo", auth, async function (req, res) {
    const userId = req.userId;
    const title = req.body.title;

    await TodoModel.create({
        userId,
        title,
    });

    res.json({
        message: "Todo created"
    })
});

app.get("/todos", auth, async (req, res) => {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId,
    });

    res.json({
        todos: todos
    })

});


app.listen(3000);