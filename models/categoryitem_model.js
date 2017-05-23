const mongoose = require('mongoose');
const config = require('../config/database');

// Categoryitem Schema
const CategoryitemSchema = mongoose.Schema({
 
  category_name: {
     type: String,
     required: true
  } ,
    category_item: {
     type: String  
  } 
  
});

const IncidentCategoryitem = module.exports = mongoose.model('Categoryitem', CategoryitemSchema);
 
module.exports.addCategoryitem = function(IncidentCategoryitem, callback) {  
    IncidentCategoryitem.save(callback);      
}

module.exports.getCategoryitemById = function(id, callback) {
  const query = {category_name: id}
  IncidentCategoryitem.find(query, callback);
}

module.exports.getAllCategoryitem = function({}, callback) {  
  IncidentCategoryitem.find({}, callback);
}