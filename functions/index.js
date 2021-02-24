const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin:true});
admin.initializeApp();
let transporter = nodemailer.createTransport({
    service: 'gmail',
    port:465,
    secure:true,
    auth: {
        user: '<Your Email>',
        pass: '<Your Password>'
    }
});

exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {

        // getting dest email by query string
       const sender = req.query.sender;
        const content = req.query.content;
        const mailOptions = {
            from: sender, // Something like: Jane Doe <janedoe@gmail.com>
            to: 'rajat123468@gmail.com',
            subject: 'Contact request from https://knowrajatmore.web.app', // email subject
            html: `<p style="font-size: 16px;">`+content+`</p>`
        };
        // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
            if(erro){
                return res.send(erro.toString());
            }
            return res.send('Sended');
        });
    });
});


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
