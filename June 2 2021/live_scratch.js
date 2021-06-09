function pullFromDatabase() {
    return ['pull', 'data', 'from', 'database'];
}
function printDataArray(stringArray) {
    console.table(stringArray);
}
function reverseString(stringValue) {
    return stringValue.split('').reverse().join('');
}
function reverseArray(arrayValue) {
    return arrayValue.reverse();
}
function doTheComplexThingAgain() {
    var databaseValues = pullFromDatabase();
    var mappedString_dataArray = databaseValues.map(function (i) { return { name: reverseString(i) }; });
    printDataArray(databaseValues);
    printDataArray(mappedString_dataArray);
}
doTheComplexThingAgain();
function PrintComplexFunctionWithManySteps() {
    // better name: listOfStrings;
    var stringDataArray = ['pull', 'data', 'from', 'database'];
    // map and reverse name
    var mappedString_dataArray = stringDataArray.map(function (i) {
        return {
            name: i.split('').reverse().join('')
        };
    });
    // reverse the entire array
    var reversedArray = mappedString_dataArray.reverse();
    // Print both data sets
    console.table(stringDataArray);
    console.table(reversedArray);
}
