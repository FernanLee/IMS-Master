const mongoose = require('mongoose');
const config = require('../config/database');

// Category Schema
const CategorySchema = mongoose.Schema({
 
  category_name: {
     type: String,
     required: true }   
});

const IncidentCategory = module.exports = mongoose.model('Category', CategorySchema);
 
module.exports.addCategory = function(IncidentCategory, callback) {  
    IncidentCategory.save(callback);      
}

module.exports.getCategoryById = function(id, callback) {
  const query = {_id: id}
  IncidentCategory.findOne(query, callback);
}

module.exports.getAllCategory = function({}, callback) {  
  IncidentCategory.find({}, callback);
}





