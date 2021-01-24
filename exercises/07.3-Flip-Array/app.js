var arr = [45,67,87,23,5,32,60];

//Your code here.
function reverseArray (arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {      
        newArr[i] = arr[arr.length - i - 1];
    }   
    return newArr;
}
console.log("Array en reverse:"+reverseArray(arr));

