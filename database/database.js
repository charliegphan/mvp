const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB_URI);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('connected to mongodb');
});

module.exports = { db };
