var random = Math.round(Math.random()*50-5);
document.write(random);
document.write("<br>");
var img = document.getElementById("Image");

if(random<10){
	document.write("The weather is cold");
	
	img.src = "cold.jpg"
}
else if(random >= 10 && random <= 32){
	document.write("The weather is moderate");
	img.src = "moderate.jpg"
}
else {
	document.write("The weather is hot");
	img.src = "hot.jpg"
}