// Server and middleware modules/packages
const express = require('express');
const path = require('path');

// Database, Routes/Controllers modules/packages
const mongoose = require('mongoose');
const logger = require('morgan');

const routes = require('./routes');

// Server setup
const PORT = process.env.PORT || 3001;
const app = express();

// Set public folder path
app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/populate', {
//   useNewUrlParser: true,
// });

// Start server
app.listen(PORT, () => console.log(`App running on port ${PORT}!`));
