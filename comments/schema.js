import mongoose from "mongoose";
const commentSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    eventId: Number,
    comment: String
},
    { collection: "comments" });
export default commentSchema;