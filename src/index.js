const express = require('express');

const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');

const { createChannel } = require('./utils/messageQueue')

// const { sendBasicEmail } = require('./services/email-service')
const TicketController = require('./controllers/tixket-controller');


const jobs = require('./utils/job');

const setupAndStartServer = async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    const channel = await createChannel()
    app.post('/api/v1/tickets', TicketController.create);
    app.listen(PORT, () => {
        console.log('Server Started', { PORT });
        jobs();
        // sendBasicEmail(
        //     'tarunkumar222020@gmail.com',
        //     'tarunkumar766894@gmail.com',
        //     'This is testing email',
        //     'Hey, how are you'
        // )
        // cron.schedule('*/1 * * * *', () => {
        //     console.log('running a task every  minutes');
        // });
    })
}

setupAndStartServer();