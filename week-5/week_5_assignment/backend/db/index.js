//  start writing from here
const mongoose = require("mongoose");
require('dotenv').config();

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected")
    }catch (error) {
        console.error("Data connection failed:", error);
        process.exit(1);
    }
}

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const UserSchema = new Schema({
    username: String,
    password: String,
});

const TodoSchema = new Schema({
    userId: ObjectId,
    title: String,
    comepleted: Boolean
});

const User = mongoose.model('User', UserSchema);
const Todo = mongoose.model('Todo', TodoSchema);


module.exports = {
    User,
    Todo,
    connectToDatabase
}