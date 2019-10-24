const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//ROUTES
app.get('/', (req, res) => {
    res.send('We are on home')
});

// Connect To DB
mongoose.connect(process.env.DB_CONNECTION,
    { useUnifiedTopology: true, useNewUrlParser: true },
    () => console.log('connected')
);

//How to we start listening to the server
app.listen(4000);