// functions generally have a declaration, inputs, and outputs
function functionName(optionalInput) {
    // do something with the input
    var didSomething = doSomething(optionalInput);
    return didSomething;
}

// from 2-pseudocode.js
/// <summary>
/// email a list of active clients
/// </summary>
/// <param name="listOfClients">list of all clients</param>
/// <returns></returns>
function emailClients(listOfClients) {
    listOfClients.forEach(client => {
        const clientRecord = database.lookup(client);
        if (clientRecord.isActive()) {
            email(clientRecord);
        }
    });
}