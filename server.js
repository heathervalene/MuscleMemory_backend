///////////////////////////////
// DEPENDENCIES
////////////////////////////////

// initialize .env variables
require("dotenv").config();



// start the mongoose db connection
require('./config/db.connection.js')

// pull PORT from .env, give default value of 4000 and establish DB Connection
const { PORT } = process.env;

// import express
const express = require("express");

// create application object
const app = express();

const cors = require("cors")
const morgan = require("morgan")

const MuscleGroupRouter = require('./routes/musclegroups.js')
const WorkoutRouter = require('./routes/workouts.js')
const MovementRouter = require('./routes/movements.js')

///////////////////////////////
// MIDDLEWARE
////////////////////////////////
app.use(express.urlencoded({extended:true}))
app.use(express.json()); 

app.use(cors()); 
app.use(morgan("dev"));

app.use('/musclegroups', MuscleGroupRouter)
app.use('/movements', MovementRouter)
app.use('/workouts', WorkoutRouter)


///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route
app.get("/", (req, res) => {
    res.send("hello world");
});

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));