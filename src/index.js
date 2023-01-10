const express = require('express');

const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');

const { sendBasicEmail } = require('./services/email-service')

const setupAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.listen(PORT, () => {
        console.log('Server Started', { PORT });
        sendBasicEmail(
            'tarunkumar222020@gmail.com',
            'tarunkumar766894@gmail.com',
            'This is testing email',
            'Hey, how are you'
        )
    })
}
setupAndStartServer();