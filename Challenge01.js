
var notes = [100, 50, 20, 10]
var counter = [0,0,0,0]
var notesLeft = [100,100,100,100]


function withdraw() {
	  var amount = document.getElementById("form1").value;


	if ((amount % 10) != 0 ){
		document.write("Please enter a value in incerments of 10 <br>")
		}
		
	else{

		for (var i = 0; i < 4; i++){
			if (amount >= notes[i]){
				if (amount / notes[i] > notesLeft[i]){
					window.alert("Machine out of money!!")
					counter[i] = notesLeft[i];
					amount = amount - (notesLeft[i]*notes[i])
				}
				else{

					counter[i] = Math.floor(amount / notes[i])
					amount = amount % notes[i]
				}
			}
		}

		if (amount==0){

			document.write((counter[0]) + " x 100€ note(s), " + counter[1] + " x 50€ note(s), " + counter[2] + " x 20€ note(s), " + counter[3] + " x 10€ note(s)")
		}

		else{
			for (var i = 0; i<4;i++){
				if(notesLeft[i]==0){
					document.write("There are no more " + notes[i]+ "euro notes left. Please enter another amount")
				}
			}
		}
	}

}
