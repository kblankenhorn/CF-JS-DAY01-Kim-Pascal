var array = [1, 7, 9, -3, 6, -20, 30, 15]
var max = 0
for (var i = 0; i < array.length; i++) {

   	console.log("i= " +i);
   	console.log("max= " + max +"\n");
 	
 	if(max < array[i]) { /* 7< 9 */
 		console.log("Max changes")
 		max = array[i]
 	} 
}

console.log(max)


