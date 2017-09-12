const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    cors = require('cors');
require('dotenv').config()

mongoose.connect('mongodb://localhost/todofancy', err => {
  if(err) throw err
  console.log('Connect DB todofancy');
})
    
const auth = require('./routes/auth');
const todos = require('./routes/todos');

// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


app.use('/', auth);
app.use('/todo', todos)


app.listen(process.env.PORT || 3000);
