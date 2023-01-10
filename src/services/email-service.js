const sender = require('../config/emailConfig');

const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
    try {
        await sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    sendBasicEmail
}



// SMTP  ->a@gmail.com
// receiver  ->d@e.com
// from : support@not.com
