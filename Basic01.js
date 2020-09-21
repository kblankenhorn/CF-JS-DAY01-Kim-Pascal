var random = Math.round(Math.random()*30-5);
document.write(random);
document.write("<br>");
if(random<10){
	document.write("The weather is cold")
}
else{
	document.write("The weather is moderate")
}