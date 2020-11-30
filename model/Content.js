const mongoose = require("mongoose");
const { Schema } = mongoose;

const contentSchema = new Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    forAge: {
        type: [String],
        required: true,
        enum: ["15-23", "24-40", "41-60"]
    },
    audio: {
        type: String,
        required: false
    },
    post: {
        type: String,
        required: false
    }
});

const Content = mongoose.model("content", contentSchema);
module.exports = { Content }