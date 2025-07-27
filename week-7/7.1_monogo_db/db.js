import mongoose from "mongoose";

const schema = mongoose.Schema;
const ObjectId = schema.ObjectId;


const User = new schema({
    email: String,
    password: String,
    name: String
});

const Todo = new schema({
    title: String,
    done: Boolean,
    userId: ObjectId
});

const UserModel = mongoose.model("users", User);
const TodoModel = mongoose.model("todos", Todo);

module.exports={
    UserModel,
    TodoModel
}