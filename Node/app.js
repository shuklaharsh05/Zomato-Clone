const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const passport = require('passport');   // For Social Media Login
const cookieSession = require('cookie-session');

const app = express();

const routes = require('./Routes/index');
const paymentRoutes = require('./Controllers/payment');
const passportSetup = require('./Controllers/passport');      // Social Media Login Setup
const authRoute = require('./Controllers/auth');          // Social Media Login Routing Part

app.use(cookieSession({ name: "Session", keys: ["edureka"], maxAge: 24 * 60 * 60 * 1000 }));

const corsOptions = {
    origin: 'http://localhost:3000',
    credential: true,
    optionSuccessStatus: 200
}

dotenv.config();

app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);
app.use('/api/payment', paymentRoutes);
app.use('/auth', authRoute);

const port = 5500;
const hostname = 'localhost'

// Database Connection
const dbUrl = 'mongodb://127.0.0.1:27017/zomato';

const atlasdbUrl = 'mongodb+srv://HarshShukla:Txk4Im1UrmbWTuG9@cluster0.emgc3ti.mongodb.net/zomato?retryWrites=true&w=majority'
mongoose.connect(atlasdbUrl, { useNewUrlParser: true, useUnifiedTopology: true })

    // name: HarshShukla
    // Password: Txk4Im1UrmbWTuG9

    .then(res => {
        app.listen(port, hostname, () => {
            console.log(`Server is running at ${hostname} : ${port}`);
        });
    })

    .catch(err => console.log(err));
