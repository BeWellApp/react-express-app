const path = require("path"),
    os = require("os");
const { admin } = require("../firebase-admin");
const { Content } = require("../model/Content");
const Busboy = require("busboy");
const audioBucket = admin.storage().bucket("Languages");

const addContent = (req, res) => {
    const content = {};
    let lang, age, destination, fileName;
    const busboy = new Busboy({ headers: req.headers });
    busboy.on('field', (fieldname, val) => {
        if (fieldname === "lang") {
            lang = val
        }
        if (fieldname === "age") {
            age = val
        }
        content[fieldname] = val;
    });

    busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
        console.log("file");
        fileName = Date.now() + "-" + filename
        switch (lang) {
            case "amh":
                destination = `/Amharic/${age}/${fileName}`;
                break;
            case "he":
                destination = `/En/${age}/${fileName}`;
                break;
            case "en":
                destination = `/He/${age}/${fileName}`;
                break;
            default:
                break;
        }
        // os.tmpdir(
        const saveTo = path.join(__dirname, os.tmpdir(), fileName);
        console.log(saveTo);
        // )
        const fileUpload = audioBucket.file(saveTo)
        const fileStream = fileUpload.createWriteStream(
            {
                destination: destination
            }
        )
        fileStream.on("finish", (res) => {
            console.log(res);
        })
        // file.pipe(fs.createWriteStream(saveTo)); 
        // images.push(filePath);
    });

    busboy.on("finish", () => {
        // content.audio = fileName;
        // Content.create(content, (err, content) => {
        //     if (err) {
        //         console.log(err);
        //         res.status(500).send("System error in server")
        //     }
        //     if (content) {
        //         return res.status(200).send(content);
        //     }
        // })
        res.send(content)
    });
    req.pipe(busboy);
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
    const { id } = req.params
    Content.findById(id, (err, content) => {
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