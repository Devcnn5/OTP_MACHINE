var express=require('express');
var router = express.Router();
var Tasks = require('../models/Tasks');

router.post('/',function(req,response){
    var flag=false;
	console.log("request received");
	console.log(req.body);
    Tasks.getcontacts(function(err,rows){
        if(!(!rows)){
            for (var i = rows.length - 1; i >= 0; i--) {
               if( req.body.First===rows[i].First_Name){
                flag=true;
               }
            }
            if(flag===false){
                 console.log("task to be added",req.body);
            Tasks.addoneTask(req.body,function(err,res){
        
        if(err)
        {
            console.log(err);
        }
        else{
                console.log("ADDED");
             
        
        }
    });


            }


        }
        else{

            console.log("task to be added",req.body);
            Tasks.addoneTask(req.body,function(err,res){
        
        if(err)
        {
            console.log(err);
        }
        else{

             console.log("ADDEd");
            
        }
    });

    
        }

    });
        console.log("Redirect now");
        response.redirect('http://localhost:3000');

});
module.exports=router;


	