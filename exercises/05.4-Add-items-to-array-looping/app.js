var arr = [4,5,734,43,45];


//*****************
// Your code here
// you need to loop 10 times, for example, using a for loop
 for(let i = 0; i<10;i++){

    //Por cada iteración genero un número aleatorio 
    var añado = Math.floor(Math.random() * (50 - 1)) + 1;
    // Por cada iteración guardo el número en el array (al final)
    arr.push(añado);

 }
//*****************

console.log(arr);