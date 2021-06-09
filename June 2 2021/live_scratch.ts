
function pullFromDatabase(): Array<string> {
    return ['pull', 'data', 'from', 'database'];
}


function printDataArray(stringArray: Array<any>): void {
    console.table(stringArray);
}

function reverseString(stringValue: string) {
    return stringValue.split('').reverse().join('');
}

function reverseArray(arrayValue: Array<any>) {
    return arrayValue.reverse();
}

function doTheComplexThingAgain(): void {
    let databaseValues = pullFromDatabase();
    let mappedString_dataArray = databaseValues.map(i => { return { name: reverseString(i) } })

    printDataArray(databaseValues);
    printDataArray(mappedString_dataArray);
}

doTheComplexThingAgain();



function PrintComplexFunctionWithManySteps() {
    // better name: listOfStrings;
    let stringDataArray: string[] = ['pull', 'data', 'from', 'database'];

    // map and reverse name
    let mappedString_dataArray = stringDataArray.map(i => {
        return {
            name: i.split('').reverse().join('')
        }
    })

    // reverse the entire array
    let reversedArray = mappedString_dataArray.reverse();

    // Print both data sets
    console.table(stringDataArray);
    console.table(reversedArray);
}


