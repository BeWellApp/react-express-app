var express = require('express');
const { logIn, addUser, deleteUser } = require('../controller/user');
var router = express.Router();

router.get("/login/:deviceIMEI", (req, res) => {
  logIn(req, res);
})

router.post("/", (req, res) => {
  addUser(req, res);
});

router.patch("/:deviceIMEI/:id", (req, res) => {
  addUser(req, res);
});

router.delete("/:deviceIMEI/:id", (req, res) => {
  deleteUser(req, res);
});

module.exports = router;
