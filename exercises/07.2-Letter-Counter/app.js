let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here

let procesado  = par.replace(/\s+/g, '').toLowerCase();


for (char of procesado) 
{
  if (!counts[char]) {
    counts[char]=1;
    }
    else {
     counts[char]++
   }
 }

console.log(counts);