var connection=require('../db');
var express=require('express');
var Tasks=require('../models/Tasks');
var https = require('https');
var router = express.Router();
router.post('/',function(req,res,next){
console.log(req.body);
var request=req.body;
require('../env.js');


var accountSid = process.env.accountSid; 
var authToken = process.env.authToken; 
var receiver= process.env.to;
var sender=process.env.sender;
req.body.date = new Date().toGMTString();
console.log("the req body: ",req.body);

//require the Twilio module and create a REST client 
var client = require('twilio')(process.env.accountSid, process.env.authToken); 
 
client.messages.create({ 
    to: request.Phone, 
    from: sender, 
    body: request.message, 
}, function(err, message) { 
    console.log(message,message.sid); 
    Tasks.savemsg(req.body,function(err,rows){
    if(err)
        {
            res.json(err);
        }
        else
        {
console.log(rows);
res.render("sent_msg.ejs",{rows: rows});
}

});

    
            
            

        
    
            
        

});
});

module.exports=router;