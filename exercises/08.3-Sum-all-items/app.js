function sumTheElements(theArray){
	
	var total = 0;
	
	//your code here
    for (var i = 0; i<theArray.length;i++)
    {
       total+= theArray[i];
    }
	return total;
}

//console.log("el total del array es: "+sumTheElements([2,13,34,5]));