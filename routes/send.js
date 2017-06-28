var connection=require('../db');
var express=require('express');
var Tasks=require('../models/Tasks');

var router = express.Router();
router.post('/',function(req,res,next){
	console.log(req.body);
Tasks.getcontact(req.body,function(err,rows){
    if(err)
        {
            res.json(err);
        }
        else
        {
            
            res.render("each_contact.ejs",{rows: rows});

        
    
            
        }

});
});

module.exports=router;