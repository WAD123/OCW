const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');


mongoose.Promise = global.Promise;
// Connect To Database
mongoose.connect(config.database, {
  useMongoClient: true
});

// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: '+err);
});

const app = express();

const users = require('./routes/users');
const bookings = require('./routes/bookings');
const feeds = require('./routes/feeds');
const adminusers = require('./routes/adminusers');
const inventories = require('./routes/inventories');
const activities = require('./routes/activities');

// Port Number
const port = process.env.PORT || 8080;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json({limit: "50mb"}));
// app.use(bodyParser.json({limit: "50mb"}));
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);
app.use('/bookings', bookings);
app.use('/feeds', feeds);
app.use('/adminusers', adminusers);
app.use('/inventories', inventories);
app.use('/activities', activities);

// Index Route
app.get('/', (req, res) => {
  res.send('NodeJS running');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
})

// Start Server
app.listen(port, () => {
  console.log('Server started on port '+port);
});
