// Clean Code: https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29 
// Javascript examples: https://github.com/ryanmcdermott/clean-code-javascript
// Typescript examples: https://github.com/labs42io/clean-code-typescript
function PullFromDatabase() {
    var stringDataArray = ['pull', 'data', 'from', 'database'];
    return stringDataArray;
}
function ReverseStringName(stringValue) {
    return stringValue.split('').reverse().join('');
}
function mapArray(arrayOfStuff) {
    arrayOfStuff.map(function (stuff) {
        return {
            name: ReverseStringName(stuff)
        };
    });
}
mapArray;
var stuff = PullFromDatabase();
var returnedStuff = mapArray(stuff);
console.log(returnedStuff);
//console.log(ReverseStringName('is a test'));
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
    //console.table(stringDataArray);
    //console.table(reversedArray);
}
