const router = require("express").Router();
const { addContent, getContents, getSingleContent, deleteContent } = require('../controller/content');

router.get("/", (req, res) => {
        getContents(req, res);
});

router.route("/:id")
        .get(getSingleContent)
        .post(deleteContent);

router.route("/")
        .post(addContent);

module.exports = router;