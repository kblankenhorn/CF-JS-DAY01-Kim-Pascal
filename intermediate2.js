for (var i = 1 ; i<101 ; i++){
	if (i % 3 == 0){
		document.write("Fizz")
	}
	if (i % 5 == 0){
		document.write("Buzz")
	}
	if(i % 3 != 0 && i % 5 !=0){
		document.write(i)
	}
	document.write("<br>")
}

