const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// connect to Database
mongoose.connect(config.database);

//On connection
mongoose.connection.on('connected', () => {
  console.log('connected to database'+ config.database);
})

//On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error'+ err);
})


const app = express();
const users = require('./routes/users');

const incidents = require('./routes/incidents');
const locations = require('./routes/location_route');
const categories = require('./routes/category_route');
const categoryitems = require('./routes/categoryitem_route');
// PORT Number
const port = 3000;

// CORS Middleware
app.use(cors());

//set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());



require('./config/passport')(passport);

app.use('/users', users);
app.use('/incidents', incidents);
app.use('/locations', locations);
app.use('/categories', categories);
app.use('/categoryitems', categoryitems);


// Index Route
app.get('/', (req,res) => {
  res.send('Invalid Endpoint');
});

app.get('*',(req, res) => {
res.sendfile(path.join(__dirname, 'public/index.html'));
})

// Start Server
app.listen(port, () => {
  console.log('Server started on port '+port);
});

