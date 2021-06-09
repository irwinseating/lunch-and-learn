// Clean Code: https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29 
// Javascript examples: https://github.com/ryanmcdermott/clean-code-javascript
// Typescript examples: https://github.com/labs42io/clean-code-typescript

/*     
 * Simpler for easier maintenance later
 * Reusable
 * Easier to understand

    ## Code Refactoring
    * Simpler for easier maintenance later
    * Reusable
    * Easier to understand
    
    
* Variable naming
    * name standardization
    * Long vs short names
    * Descriptions
* Code Complexity
    * General Rule: Do one thing well
 
*/


// interfaces/classes
interface person {
    PersonId: number;
    name: string
}


function PullFromDatabase(): Array<string> {
    let stringDataArray: string[] = ['pull', 'data', 'from', 'database'];

    return stringDataArray;
}

function ReverseStringName(stringValue: string): string {
    return stringValue.split('').reverse().join('');
}

function mapArray(arrayOfStuff: any) {
    arrayOfStuff.map((stuff: string) => {
        return {
            name: ReverseStringName(stuff)
        }
    })
}




var stuff = PullFromDatabase();
var returnedStuff = mapArray(stuff);

console.log(returnedStuff)
//console.log(ReverseStringName('is a test'));


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
    //console.table(stringDataArray);
    //console.table(reversedArray);
}



