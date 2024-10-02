const nodemailer = require('nodemailer');
const path = require('path'); 

const transporter = nodemailer.createTransport({
    secure: true,
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: 'gauranshverma450@gmail.com',
        pass: 'yyvd hgkr javv amkp', 
    },
});

function sendMail(to, sub, msg, attachments) {
    const mailOptions = {
        to: to,
        subject: sub,
        html: msg,
        attachments: attachments, 
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log("Error sending email: ", error);
        }
        console.log("Email sent: ", info.response);
    });
}

const imageAttachment = {
    filename: 'image.png', 
    path: path.join(__dirname, 'TCS.jpg')
};

sendMail(
    "gauransh.2125csit@kiet.edu",
    "Task Submission",
    "My name is [Gauransh verma] and I am a fresher from [7th Sem], [CSIT] and here are my details Roll number [2100290110054]",
    [imageAttachment] 
);
