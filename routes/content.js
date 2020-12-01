const router = require("express").Router();
const { addContent, getContents, getSingleContent, deleteContent } = require('../controller/content');
const Multer = require("multer");

const multer = Multer({
        storage: Multer.memoryStorage(),
        limits: {
                fileSize: 25 * 1024 * 1024 // no larger than 25mb, you can change as needed.
        }
});


router.route("/")
        .get(getContents)
        .post(multer.single('audio'), addContent);

router.route("/:id")
        .get(getSingleContent)
        .delete(deleteContent);

module.exports = router;