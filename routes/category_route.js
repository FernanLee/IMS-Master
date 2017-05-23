const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Category_master = require('../models/category_model');


// Register Category
router.post('/newcategory', (req, res, next) => {
        let newCategory = new Category_master({
        category_name: req.body.category_name      
        });

        Category_master.addCategory(newCategory, (err,Category)  => {
            if(err) {
            res.json({success: false, msg:'Failed to add Category', err: err});
            } else {
            res.json({success: true, msg:'Category added'});
            }
        });
        });

//Get All Category
router.get('/categories',  (req, res, next) => {    
        Category_master.getAllCategory({}, (err, category) => {                 
      //  console.log(category)
        res.json(category);  
        });
    });
    
    
//Get single Category
router.get('/category/:id',  (req, res, next) => {   
    const id = req.id; 
         Category_master.getCategoryById(req.params.id, (err, category) => {                 
        //console.log(category)
        res.json(category);     
        });
 });


module.exports = router;
