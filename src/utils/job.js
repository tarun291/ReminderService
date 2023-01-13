const cron = require('node-cron');

const emailService = require('../services/email-service');

const sender = require('../config/emailConfig');

// Every 1 minute
// We will check are their any pending emails which was expected to be sent 
// by now and is pending

const setupJobs = () => {
    cron.schedule('*/1 * * * *', async () => {
        const responce = await emailService.fetchPendingEmails();
        console.log(typeof responce);
        responce.forEach((email) => {
            sender.sendMail({
                to: email.recepientEmail,
                subject: email.subject,
                text: email.content
            }, async (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(data);
                    await emailService.updateTicket(email.id, { status: "SUCCESS" });
                }
            })
        })
    })
}

module.exports = setupJobs;