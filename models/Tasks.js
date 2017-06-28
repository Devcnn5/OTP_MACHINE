var connection=require('../db');

if(connection){
	console.log("connection established");

}

var Tasks={
	getcontact:function(Task,callback){
		return connection.query('SELECT * From contact WHERE First_Name=?',Task.First,callback);

	},
	

	savemsg:function(Task,callback){
		connection.query("Insert into messages values(?,?,?,?)",[Task.First+' '+Task.Last,Task.Phone,Task.message,Task.date]);
		
		return connection.query("SELECT * From messages order by Time_Stamp DESC",callback);
	},

	getcontacts: function(callback){
		return connection.query('SELECT * From contact',callback);
	
	},
	
	addoneTask:function(Task,callback){

		
		console.log(Task);
		connection.query("Insert into contact values(?,?,?)",[Task.First,Task.Last,Task.Phone],callback);
		return Task;
		}
	
	

};
module.exports=Tasks;