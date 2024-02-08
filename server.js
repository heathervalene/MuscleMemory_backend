///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const cors = require("cors")
const morgan = require("morgan")
const express = require("express");



require("dotenv").config();


require('./config/db.connection.js')


const { PORT } = process.env;





const app = express();



const AuthRouter = require('./routes/auth.js')
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
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/auth', AuthRouter)
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