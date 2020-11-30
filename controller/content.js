const { admin } = require("../firebase-admin");
const { Content } = require("../model/Content");
const bucket = admin.storage().bucket("gs://bewell-8229a.appspot.com");
const { format } = require('util');

const addContent = (req, res) => {
    const body = req.body;
    const file = req.file;
    let destination = '';
    fileName = Date.now() + "-" + file.originalname;
    switch (body.lang) {
        case "am":
            destination = `Languege/Amharic/${body.age}/${fileName}`;
            break;
        case "he":
            destination = `Languege/En/${body.age}/${fileName}`;
            break;
        case "en":
            destination = `Languege/He/${body.age}/${fileName}`;
            break;
        default:
            break;
    }

    if (file) {
        console.log(destination);
        uploadImageToStorage(file, destination).then((success) => {
            body.audio = success;
            Content.create(body, (err, content) => {
                if (err) {
                    console.log(err);
                    return;
                }
                return res.status(201).send(content);
            })
        }).catch((error) => {
            console.error(error);
        });
    }
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
        return res.status(200).send(content);
    });
}

const updateContent = (req, res) => {

}

const deleteContent = (req, res) => {

}


const uploadImageToStorage = (file, destination) => {
    return new Promise((resolve, reject) => {
        if (!file) {
            reject('No image file');
        }
        let newFileName = `${Date.now()}_${file.originalname}`;
        let fileUpload = bucket.file(newFileName);
        const blobStream = fileUpload.createWriteStream({
            destination: destination,
            metadata: {
                contentType: file.mimetype
            }
        });

        blobStream.on('error', (error) => {
            reject('Something is wrong! Unable to upload at the moment.');
        });

        blobStream.on('finish', () => {
            // The public URL can be used to directly access the file via HTTP.
            const url = format(`https://storage.googleapis.com/${bucket.name}/${fileUpload.name}`);
            resolve(url);
        });

        blobStream.end(file.buffer);
    });
}

module.exports = {
    addContent, getContents, getSingleContent, updateContent, deleteContent
}