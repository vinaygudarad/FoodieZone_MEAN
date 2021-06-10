const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const config = require('./config/database');

//connect to database
mongoose.connect(config.database);

//check if the connection is on

mongoose.connection.on('connected', () =>{
    console.log('Connected to database '+config.database );
});

mongoose.connection.on('error', (err) =>{
    console.log('database error '+err );
});



const app = express();

const users = require('./routes/users');

 
const port = 3000;

//cors middleware
app.use(cors());

//set static folder

app.use(express.static(path.join(__dirname, 'public')));

//body parser middleware

app.use(bodyParser.json());

//passport

app.use(passport.initialize());
app.use(passport.session());


require('./config/passport')(passport);

app.use('/users', users);


//Index route
app.get('/', (req,res) =>{
    res.send('Invalid endpoint');
})

//start server
app.listen(port, () =>{
    console.log('Server started on port '+port);
})

