const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Location_master = require('../models/location_model');


// Register Location
router.post('/newlocation', (req, res, next) => {
        let newLocation = new Location_master({
        location: req.body.location  
        });

        Location_master.addLocation(newLocation, (err,Location)  => {
            if(err) {
            res.json({success: false, msg:'Failed to add Location'});
            } else {
            res.json({success: true, msg:'Location added'});
            }
        });
        });

//Get All Location
router.get('/locations',  (req, res, next) => {    
        Location_master.getAllLocation({}, (err, location) => {                 
      //  console.log(location)
        res.json(location);  
        });
    });
    
    
//Get single  Location
router.get('/location/:id',  (req, res, next) => {   
    const id = req.id; 
         Location_master.getLocationById(req.params.id, (err, location) => {                 
      //  console.log(location)
        res.json({     
            locationlist:location});     
        });
 });


module.exports = router;
