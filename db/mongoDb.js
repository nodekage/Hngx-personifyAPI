const mongoose = require('mongoose');
const CONFIG = require('../config/config');

async function connectToMongoDB() {
  try {
    await mongoose.connect(CONFIG.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDb Connection Successful!');
  } catch (err) {
    console.error('MongoDb Connection Error:', err.message || err);
    throw err;
  }
}

module.exports = { connectToMongoDB };
