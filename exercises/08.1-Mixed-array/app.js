var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here
function typeArray (mix) {
    var newArr = [];
    for (var i = 0; i < mix.length; i++) {      
      newArr[i] = typeof mix[i]
    }   
    return newArr;
}
console.log(typeArray(mix));