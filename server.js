require('dotenv').config()//method config
const express = require('express')//require express
const app = express()
const PORT = process.env.PORT || 3000 //set my port 
const mongoose = require('mongoose')//database
const methodOverride = require('method-override')//include the method-override package in order to be able to DELETE
const Logs = require('./models/logs')
const seedLogs = require('./models/seed/seedLogs')
const logRoutes = require('./controllers/logs')//routes


//Database Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  mongoose.connection.once("open", () => {
    console.log("conected to database")
  })


//View Engine
app.set("view engine", 'jsx')
const jsxViewEngine = require('jsx-view-engine')
app.engine("jsx", jsxViewEngine())

//Middleware
app.use(express.urlencoded({extended: false}))
//method-override to be able to delete 
app.use(methodOverride('_method'));
//('./controllers/logs')//routes
app.use("/", logRoutes)



//// Index route
// first, just test it by having it res.send('index')
// router.get('/logs', (req, res) => {
// res.send('index')
// });

// Show route
// router.get('/logs/:id', (req, res) => {

// });

//// New route
// // change your res.send to res.renderthis view
// router.get('/logs/new', (req, res) => {
// res.send('new')
// });

// // Create route
// // create a createroute in your server.js- be sure to follow the Restful convention
// // just have it res.send('received')as the response for now
// router.post('/logs', (req, res) => {
//     res.send('received')
// });

// // Edit route
// router.get('/logs/:id/edit', (req, res) => {

// });

// // Update route
// router.put('/logs/:id', (req, res) => {

// });

// // Destroy route
// router.delete('/logs/:id', (req, res) => {

// });


//app is listening
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
