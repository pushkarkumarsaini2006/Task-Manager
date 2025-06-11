// Script to update all profileImageUrl fields in MongoDB from localhost to deployed backend URL
// Usage: node scripts/fixImageUrls.js

require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');

const OLD_URL = 'http://localhost:8000';
const NEW_URL = 'https://task-manager-g01e.onrender.com';

async function updateProfileImageUrls() {
  await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log('Connected to MongoDB');

  const result = await User.updateMany(
    { profileImageUrl: { $regex: `^${OLD_URL}/uploads/` } },
    [
      {
        $set: {
          profileImageUrl: {
            $replaceOne: {
              input: "$profileImageUrl",
              find: OLD_URL,
              replacement: NEW_URL
            }
          }
        }
      }
    ]
  );

  console.log(`Updated ${result.modifiedCount} user(s).`);
  await mongoose.disconnect();
}

updateProfileImageUrls().catch(err => {
  console.error(err);
  process.exit(1);
});
