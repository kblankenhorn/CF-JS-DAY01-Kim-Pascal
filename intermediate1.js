var student = [["Martin", 76 ], ["Thomas", 85], ["Klaus", 65], ["Maria", 93], ["David", 81]]
var sum = 0
for (var i = 0; i < student.length; i++){
	sum += student [i][1]
	document.write("Hello " + student[i][0] + "<br>")
	if (student[i][1] <=60) {
		document.write("Your grade is F<br>")
	}
	else if (student [i][1] <70 && student [i][1] >=60){
		document.write("Your grade is D <br>")
	}
	else if (student [i][1] <80 && student [i][1] >=70){
		document.write("Your grade is C <br>")
	}
	else if (student [i][1] <90 && student [i][1] >=80){
		document.write("Your grade is B<br>")
	}
	else if (student [i][1] <=100 && student [i][1] >=90){
		document.write("Your grade is A<br>")
	}
}
var average = sum / student.length
document.write("The class average is " + average + "<br>")
	if (average <=60) {
		document.write("Your grade is F<br>")
	}
	else if (average <70 && average >=60){
		document.write("Your grade is D <br>")
	}
	else if (average <80 && average >=70){
		document.write("Your grade is C <br>")
	}
	else if (average <90 && average >=80){
		document.write("Your grade is B<br>")
	}
	else if (average <=100 && average >=90){
		document.write("Your grade is A<br>")
	}


