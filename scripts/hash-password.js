// scripts/hash-password.js
// Usage: node scripts/hash-password.js "yourPassword"
const bcrypt = require('bcryptjs');
const [,, plain] = process.argv;
if (!plain) {
  console.error('Please provide a password as the first argument');
  process.exit(1);
}
const saltRounds = 10;
bcrypt.hash(plain, saltRounds, (err, hash) => {
  if (err) {
    console.error('Error hashing password:', err);
    process.exit(1);
  }
  console.log('Password hash:', hash);
});
