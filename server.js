//my require libraries
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');

// Database Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.once('open', () => {
    console.log('connected to mongo');
  });

  //view engines 
const jsxViewEngine = require('jsx-view-engine');

app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());

// Index route
// first, just test it by having it res.send('index')
router.get('/logs', (req, res) => {
res.send('index')
});

// Show route
router.get('/logs/:id', (req, res) => {

});

// New route
// change your res.send to res.renderthis view
router.get('/logs/new', (req, res) => {
res.send('new')
});

// Create route
// create a createroute in your server.js- be sure to follow the Restful convention
// just have it res.send('received')as the response for now
router.post('/logs', (req, res) => {
    res.send('received')
});

// Edit route
router.get('/logs/:id/edit', (req, res) => {

});

// Update route
router.put('/logs/:id', (req, res) => {

});

// Destroy route
router.delete('/logs/:id', (req, res) => {

});

module.exports = router;





//app is listening
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });
  