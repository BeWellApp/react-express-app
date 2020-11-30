const { Content } = require("../model/Content");

const addContent = (req, res) => {
    Content.create(req.body, (err, content) => {
        if (err) {
            console.log(err);
            res.status(500).send("System error in server")
        }
        if (content) {
            return res.status(200).send(content);
        }
    })
}

const getContents = (req, res) => {
    const { forAge, lang, category } = req.query;
    Content.find({ forAge, lang, category }, (err, contents) => {
        if (err) {
            console.log(err);
            return res.status(500).send("error in server")
        }

        return res.status(200).send(contents);
    });
}

const getSingleContent = (req, res) => {
    Content.findById({ _id: req.params }, (err, content) => {
        if (err) {
            console.log(err);
            return res.status(500).send("error in server")
        }
        // if (content)
        return res.status(200).send(content);
    })
}

const updateContent = (req, res) => {

}

const deleteContent = (req, res) => {

}

module.exports = {
    addContent, getContents, getSingleContent, updateContent, deleteContent
}