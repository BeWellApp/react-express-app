const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: false,
        default: "female"
    },
    age: {
        type: String,
        enum: ["15-23", "24-40", "41-60"],
        required: true
    },
    email: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    role: {
        type: String,
        required: false
    },
    lang: {
        type: String,
        enum: ["he", "en", "am"],
        required: true
    },
    deviceIMEI: {
        type: String,
        required: true,
        unique: true
    }
});

const User = mongoose.model("user", userSchema);

module.exports = { User }