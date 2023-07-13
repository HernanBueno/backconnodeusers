import mongoose from "mongoose";

const User = new mongoose.Schema({
    dniNumber:{type: Number, required:true},
    name:{type: String, required:true},
    lastName:{type: String, required:true},
    sex:{type: String, required:true},
    phoneNumber:{type: Number, required:true},
});

export const UserSchema = mongoose.model('User', User);