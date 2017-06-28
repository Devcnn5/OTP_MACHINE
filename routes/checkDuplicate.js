var express=require('express');
var router = express.Router();
var Tasks = require('../models/Tasks');

router.post('/',function(req,res){
	console.log("request received");
	console.log(req.body);
	Tasks.getcontact(req.body,function(err,rows){
		
		if(err)
        {
            res.json(err);
        }
        else{
        	res.json(rows);

        	 
            //res.redirect('http://localhost:3000');
        }
	});


	
	

});
module.exports=router;