const bcrypt = require('bcrypt');
const password = 'securepassword123';  // Replace this with your actual password
bcrypt.hash(password, 10, (err, hash) => {
  if (err) throw err;
  console.log('Hashed password:', hash);
});
