const jwt = require("jsonwebtoken"),
    bcrypt = require("bcryptjs");
const { User } = require("../model/User");

//*Register new user
const addUser = (req, res) => {
    const body = req.body;
    const newUser = new User(body);
    newUser.save()
        .then(user => { return res.status(201).send(user) })
        .catch(err => {
            console.log(err);
            return res.status(500).send("unable ro register")
        });
}

//*Login if exist
const logIn = (req, res) => {
    const { deviceIMEI } = req.params;
    User.findOne({ deviceIMEI}, (err, user) => {
        if (user) {
            if (user) return res.status(200).send(user);
        }
        return res.status(500).send("user not found");
    });   
}

//*updating the user preference
const updateUser = (req, res) => {
    const { id, deviceIMEI } = req.params;
    User.findById(id, (err, user) => {

    })
}

//* Find user by IMEI
const findUser = (IMEI) => {
    User.findOne({ deviceIMEI: IMEI }, (err, user) => {
        if (user) {
            return user;
        }
        return false;
    });
}

const deleteUser = (req, res) => {

}

module.exports = {
    addUser, logIn, updateUser, deleteUser
}