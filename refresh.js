var seconds = 5;
var divid = "icecastdiv";
var url = "/titre.php";

////////////////////////////////
//
// Refreshing the DIV
//
////////////////////////////////

function refreshdiv(){

// The XMLHttpRequest object

var xmlHttp;
try{
xmlHttp=new XMLHttpRequest(); // Firefox, Opera 8.0+, Safari
}
catch (e){
try{
xmlHttp=new ActiveXObject("Msxml2.XMLHTTP"); // Internet Explorer
}
catch (e){
try{
xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
}
catch (e){
alert("Your browser does not support AJAX.");
return false;
}
}
}

// The code...
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
xmlHttp.onreadystatechange=function(){
if(xmlHttp.readyState==4){
document.getElementById(divid).innerHTML=xmlHttp.responseText;
setTimeout('refreshdiv()',seconds*1000);
}
}
}

// Start the refreshing process

window.onload = function startrefresh(){
setTimeout('refreshdiv()',seconds*1000);
}	
