const router = require("express").Router();
const { addContent, getContents, getSingleContent, deleteContent } = require('../controller/content');
const Multer = require("multer");
const multer = Multer({
        storage: Multer.memoryStorage(),
        limits: {
                fileSize: 25 * 1024 * 1024 // no larger than 5mb, you can change as needed.
        }
});

router.get("/", (req, res) => {
        getContents(req, res);
});

// router.route("/:id")
//         .get(getSingleContent)
// .post(deleteContent);
router.get("/:id", (req, res) => {
        getSingleContent(req, res);
});

router.post("/", multer.single('audio'), (req, res) => { addContent(req, res) })


module.exports = router;