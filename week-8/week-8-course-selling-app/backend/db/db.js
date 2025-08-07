const mongoose = require("mongoose");

const schema = mongoose.Schema;
const ObjectId = schema.ObjectId;

const userSchema = schema({
    _id: ObjectId,
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String
});

const courseSchema = schema({
    _id: ObjectId,
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId
});

const adminSchema = schema({
    _id: ObjectId,
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String
});

const purchaseSchema = schema({
    userId: ObjectId,
    courseId: ObjectId,
});

const userModel = mongoose.model('user', userSchema);
const adminModel = mongoose.model('admin', adminSchema);
const courseModel = mongoose.model('course', courseSchema);
const purchaseModel = mongoose.model('purchase', purchaseSchema);

export {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}