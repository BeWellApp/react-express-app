const { Content } = require("../model/Content");

const addContent = (req, res) => {

}

const getContents = (req, res) => {
    //! content?age="15-23"&category="talking" 
    const { age, lang, category } = req.query;
    Content.find({ age?, lang?, category?}, (err, contents) => {
        if (err) {
            console.log(err);
            return res.status(500).send("error in server")
        }
        if (contents.length > 0) {
            res.status(200).send(contents);
        }
    });
}

const getSingleContent = (req, res) => {

}

const updateContent = (req, res) => {

}

const deleteContent = (req, res) => {

}

module.exports = {
    addContent, getContents, getSingleContent, updateContent, deleteContent
}