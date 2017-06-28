
function submitForm(thelink){ 
	alert(thelink.text);

var url = 'http://localhost:3000/sendmsg';
var form = $('<form action="' + url + '" method="post">' +
  '<input type="text" name="First" value="' + thelink.text + '" />' +
  '</form>');
$('body').append(form);
form.submit(); 
	}



function validateForm(){
var table=$("#table");
var f_name=document.forms["add_contact"]["First"].value;
var l_name=document.forms["add_contact"]["Last"].value;
var no=document.forms["add_contact"]["Phone"].value;
var obj={
	First:f_name,
	Last:l_name,
	Phone:no
};


if(f_name!=="" && l_name!=="")
{
	var phoneno = /\+\d{12}/;  
  if((no.match(phoneno)) && no.length<14)  
        {

        	
        	

        	$.ajax({
        		type:"POST",
        		url:"http://localhost:3000/checkDuplicate",
        		data:obj,
        		success:function(data){
        		if(!(!data.length)){

        			alert("Duplicate First Name!!Enter Another");
        			return false;
        		}
        		else{
        			return true;
        		}
        		},
        		error:function(xhr){
        			console.log(xhr);
        			return false;
        		}
        		
        	});
        	
       
        }  
      else  
        {  
        alert("Input 10 digit no. with country code e.g.(+917676******)");  
        return false;  
        }  

}
else{
	alert("Fill in First and Last Name.");
return false;
}
}