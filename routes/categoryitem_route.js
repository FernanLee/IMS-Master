const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Categoryitem_master = require('../models/categoryitem_model');


// Register Category item
router.post('/newcategoryitem', (req, res, next) => {
        let newCategoryitem = new Categoryitem_master({
        category_name: req.body.category_name ,
        category_item: req.body.category_item  
        });

        Categoryitem_master.addCategoryitem(newCategoryitem, (err,Categoryitem)  => {
            if(err) {
            res.json({success: false, msg:'Failed to add Category item', err: err});
            } else {
            res.json({success: true, msg:'Category item added'});
            }
        });
        });

//Get All Category item
router.get('/categoryitems',  (req, res, next) => {    
        Categoryitem_master.getAllCategoryitem({}, (err, categoryitem) => {                 

        res.json(categoryitem);  
        });
    });
    
    
//Get single Category item
router.get('/categoryitem/:id',  (req, res, next) => {   
    const id = req.id; 
         Categoryitem_master.getCategoryitemById(req.params.id, (err, categoryitem) => {                 
    
        res.json(categoryitem);     
        });
 });


module.exports = router;
