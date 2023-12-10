import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    bio: String,
    role: {
        type: String,
        enum: ["ADMIN", "USER"],
        default: "USER"
    },
    following: [mongoose.Schema.Types.ObjectId],
    followers: [mongoose.Schema.Types.ObjectId],
    favoriteEvents: [Number],
    role: {
        type: String,
        enum: ["ADMIN", "USER"],
        default: "USER"
    }
},
    { collection: "users" });
export default userSchema;