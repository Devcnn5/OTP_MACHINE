var connection=require('../db');
var express=require('express');
var Tasks=require('../models/Tasks');

var router = express.Router();
router.get('/',function(req,res,next){
Tasks.getcontacts(function(err,rows){
    if(err)
        {
            res.json(err);
        }
        else
        {
            
            res.render("add_contacts.ejs",{rows: rows});

        
    
            
        }

});
});



module.exports=router;