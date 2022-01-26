function combine(input1, input2, resultType) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if(resultType === 'number') {
    // 	return +result;
    // } else {
    // 	return result.toString();
    // }
}
var combinedAges = combine(30, 36, 'number');
console.log(combinedAges);
var combinedStringAges = combine('30', '36', 'number');
console.log(combinedStringAges);
var combinedNames = combine('Joaquin', 'german', 'string');
console.log(combinedNames);
var combinedNamesNumber = combine('Joaquin', 'german', 'number');
console.log(combinedNames);
