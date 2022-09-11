function objectToArray(obj){
    let result = Object.keys(obj).map((key) => [key, obj[key]]);
    console.log(result);
}
objectToArray({ a: 1, b: 2 })   // ➞    [["a", 1], ["b", 2]]

objectToArray({ shrimp: 15, tots: 12 })  //  ➞    [["shrimp", 15], ["tots", 12]]

objectToArray({})     // ➞  []

//example found here:  https://stackoverflow.com/questions/38824349/how-to-convert-an-object-to-an-array-of-key-value-pairs-in-javascript