const mongoose = require('mongoose');
const config = require('../config/database');

// Location Schema
const LocationSchema = mongoose.Schema({
 
  location: {
     type: String,
     required: true
  } 
  
});

const IncidentLocation = module.exports = mongoose.model('Location', LocationSchema);
 
module.exports.addLocation = function(IncidentLocation, callback) {  
      IncidentLocation.save(callback);      
}

module.exports.getLocationById = function(id, callback) {
  const query = {_id: id}
  IncidentLocation.findOne(query, callback);
}

module.exports.getAllLocation = function({}, callback) {  
  IncidentLocation.find({}, callback);
}