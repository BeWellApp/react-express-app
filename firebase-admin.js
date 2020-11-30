const firebaseAdmin = require("firebase-admin");
const serviceAccount = require("./bewell-8229a-firebase-adminsdk-dtfhu-22c6d09b22.json");

const admin = firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
    databaseURL: "https://bewell-8229a.firebaseio.com"
});

module.exports.admin = admin;