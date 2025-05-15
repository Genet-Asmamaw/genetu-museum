// const express = require('express');
// const session = require('express-session');
// const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt');

// const app = express();
// const PORT = 3000;

// // Middleware
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(session({
//   secret: 'your_secret_key',
//   resave: false,
//   saveUninitialized: true
// }));

// // Add near top with other middleware
// app.use(express.static(path.join(__dirname, '../biruh')));
// app.use('/admin', express.static(path.join(__dirname, 'public')));

// // Update root route
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../biruh/index.html'));
// });

// // Serve static files
// app.use(express.static('public'));

// // Dummy user (Replace this with hashed password later)
// const users = [
//   {
//     id: 1,
//     username: 'genetu',
//     // You’ll replace this with a real hashed password soon
//     passwordHash: '$2b$10$s12N3YZLoWFcgly2qi0l2uLLHdDc7ky.aW1tkmO23fSAx0bXj0MWW'
//   }
// ];

// app.get('/login', (req, res) => {
//   res.sendFile(__dirname + '/public/login.html');
// });

// app.post('/login', async (req, res) => {
//   const { username, password } = req.body;
//   const user = users.find(u => u.username === username);

//   if (user && await bcrypt.compare(password, user.passwordHash)) {
//     req.session.userId = user.id;
//     res.redirect('/admin');
//   } else {
//     res.send('Invalid credentials. <a href="/login">Try again</a>');
//   }
// });

// app.get('/admin', (req, res) => {
//     console.log('Admin page requested. Session userId:', req.session.userId);  // Add this line
//   if (req.session.userId) {
//     res.sendFile(__dirname + '/public/admin.html');
//   } else {
//     res.redirect('/login');
//   }
// });

// app.get('/logout', (req, res) => {
//   req.session.destroy();
//   res.redirect('/login');
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });const fs = require('fs');
// const path = require('path');

// // Add these near top with other requires
// const DATA_FILE = path.join(__dirname, 'museumData.json');

// // File system helper functions
// function readData() {
//   try {
//     return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
//   } catch (err) {
//     return [];
//   }
// }

// function writeData(data) {
//   fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
// }

// // Add these routes before app.listen()
// app.get('/api/entries', (req, res) => {
//   res.json(readData());
// });

// app.post('/api/entries', async (req, res) => {
//   if (!req.session.userId) return res.status(401).send('Unauthorized');
  
//   const newEntry = {
//     ...req.body,
//     id: Date.now(),
//     createdAt: new Date().toISOString()
//   };
  
//   const entries = [...readData(), newEntry];
//   writeData(entries);
//   res.status(201).json(newEntry);
// });

// app.put('/api/entries/:id', (req, res) => {
//   if (!req.session.userId) return res.status(401).send('Unauthorized');
  
//   const entries = readData();
//   const index = entries.findIndex(e => e.id == req.params.id);
//   if (index === -1) return res.status(404).send('Not found');
  
//   entries[index] = {...entries[index], ...req.body, updatedAt: new Date().toISOString()};
//   writeData(entries);
//   res.json(entries[index]);
// });

// app.delete('/api/entries/:id', (req, res) => {
//   if (!req.session.userId) return res.status(401).send('Unauthorized');
  
//   const entries = readData().filter(e => e.id != req.params.id);
//   writeData(entries);
//   res.status(204).send();
// });


