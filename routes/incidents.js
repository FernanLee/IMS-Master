const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Incident = require('../models/incident');



const passport = require('passport');
const jwt = require('jsonwebtoken');


// New Incident
router.post('/newincident', (req, res, next) => {
//res.send('NEW INCIDENT');
let newIncident = new Incident({
    
    Patient: req.body.Patient,
    ReportedBy: req.body.ReportedBy,
    ReportedTo: req.body.ReportedTo,
    LocationOfIncident: req.body.LocationOfIncident,
    DateOfIncident: req.body.DateOfIncident,
    WitnessList: req.body.WitnessList,
    incidentDescription: req.body.incidentDescription,
    CategoryName: req.body.CategoryName,
    categoryItem: req.body.categoryItem,
    CategoryOther: req.body.CategoryOther,
    RCASummary: req.body.RCASummary,
    harmScore: req.body.harmScore,
    PreSeverity: req.body.PreSeverity,
    preOccurence: req.body.preOccurence,
    preRiskScore: req.body.preRiskScore,
    lessonsLearned: req.body.lessonsLearned,
    actionsTaken: req.body.actionsTaken,
    postSeverity: req.body.postSeverity,
    postOccurence: req.body.postOccurence,
    postRiskScore: req.body.postRiskScore,
    incidentOpen: req.body.incidentOpen,
    notificationSend: req.body.notificationSend,
    showSummary: req.body.showSummary,
    statusOfIncident: req.body.statusOfIncident,
    lastModified: req.body.lastModified,
    modifiedBy: req.body.modifiedBy,
    lastModified_Reportedby: req.body.lastModified_Reportedby

});

Incident.addIncident(newIncident, (err,incident)  => {  
    if(err) {
      console.log(incident._id)
      res.json({success: false, msg:'Failed to create incident' + err});
    } else {
      res.json({success: true, msg:'Incident created successfuly' + incident._id });
    }
});
});


//Get all incidents
    router.get('/incidents',  (req, res, next) => {    
        Incident.getAllIncident({}, (err, incidents) => {                 
      //  console.log(incidents)
        res.json(incidents);
       
        });
    });

    //Get single incident
    router.get('/incident/:id',  (req, res, next) => {    
        Incident.getIncidentById(req.params.id, (err, incidents) => {                 
       // console.log(incidents)
        res.json(incidents);
       
        });
    });

       //update single incident
    router.put('/incident/:id',  (req, res, next) => {    

        
        Incident.updateIncident(req.params.id, (err, incidents) => {                 
       // console.log(incidents)
        res.json(incidents);
       
        });
    });


module.exports = router;
