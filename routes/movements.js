///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const router = express.Router()

///////////////////////////////
// ROUTES
////////////////////////////////

router.get(':muscleId/', (req, res) => {
    res.status(200).json({message: "movement index route"})
})

//filter route//



module.exports = router
