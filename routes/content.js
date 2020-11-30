const { getContents } = require("../controller/content");

const router = require("express").Router();

router.get("/", (req, res) => {
        getContents(req, res);
});

router.get("/:id", (req, res) => {

});

router.post("/", (req, res) => {

});



module.exports = router;