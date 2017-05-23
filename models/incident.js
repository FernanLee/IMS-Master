const mongoose = require('mongoose');
const config = require('../config/database');


// Incident Schema
const IncidentSchema = mongoose.Schema({

//_ID
//_rev
Patient: {
     type: String         
        },
ReportedBy: {
     type: String,
     required: true
    },
ReportedTo: {
     type: String
      },
LocationOfIncident: {
     type: String
    },
DateOfIncident: {
     type: Date,
     required: true
    },
WitnessList: {
    type: String
     },
incidentDescription: {
    type: String,
    required: true
    },
CategoryName: {
    type: String
    },
categoryItem: {
    type: String
    },
CategoryOther: {
    type: String
    },
RCASummary: {
    type: String
   },
harmScore: {
    type: String
   },
PreSeverity: {
    type: String
  },
preOccurence: {
    type: String
    },
preRiskScore: {
    type: String
    },
lessonsLearned: {
    type: String
    },
actionsTaken: {
    type: String
    },
postSeverity: {
    type: String
    },
postOccurence: {
     type: String
    },
postRiskScore: {
     type: String
     },
incidentOpen: {
     type: String
    },
notificationSend: {
     type: String
     },
showSummary: {
     type: Boolean
     },
statusOfIncident: {
     type: String
    
    },
  lastModified: {
      type: Date
     },
   modifiedBy: {
      type: String
    },
   lastModified_Reportedby: {
      type: String
    },
      LastModified_LocationOfIncident: {
      type: String
    }
});

const Incident = module.exports = mongoose.model('Incident', IncidentSchema);

module.exports.getIncidentById = function(id, callback) {
  const query = {_id: id}
  Incident.findOne(query, callback);
}

module.exports.addIncident = function(newIncident, callback) { 
  newIncident.save(callback);  
}

module.exports.getAllIncident = function({}, callback) {  
  Incident.find({}, callback);
}

module.exports.updateIncident = function(newIncident, callback) { 
  newIncident.update(callback);  
}


