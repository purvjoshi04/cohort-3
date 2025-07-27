import express from "express";
import { UserModel, TodoModel } from "./db.js";

const app = express();

app.post("/signup", async (req, res) => {
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;

    await UserModel.insert({
        email,
        name,
        password
    });
    res.json({
        message: "You are signed up!"
    })
})

app.post("/signin", (req, res) => {

})
app.post("/todo", (req, res) => {

})
app.get("/todos", (req, res) => {

});


app.listen(3000);