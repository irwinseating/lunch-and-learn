
/* #region Example 1 */
// Remember that code we had in 2-pseudocode.js? 
function emailClients(listOfClients) {
    listOfClients.forEach(client => {
        const clientRecord = database.lookup(client);
        if (clientRecord.isActive()) {
            email(clientRecord); // assume email() function exists elsewhere
        }
    });
}

// One rule we missed is that a function should do just one thing.
function emailClients(listOfClients) {
    listOfClients.forEach(client => {

        // 1) Look up active client
        const clientRecord = database.lookup(client);
        if (clientRecord.isActive()) {
            // 2) send email
            email(clientRecord);
        }
    });
}

// How can we split this up?

// Look up active client
function isActiveClient(client) {
    const clientRecord = database.lookup(client);
    return clientRecord.isActive();
}

// email active clients
function emailActiveClients(listOfClients) {
    let activeClients = listOfClients.filter(client => isActiveClient(client));
    activeClients.forEach(activeClient => email(activeClient));
}
/* #endregion */




/* #region Example 2 */
// How about the example from if_else_switch.js - can we make that better?

// set parts
var computerParts = ['cpu', 'motherboard', 'mouse', 'keyboard', 'gpu'];

// declare variables
var cpuPrice;
var motherboardPrice;
var mousePrice;
var keyboardPrice;
var gpuPrice;

// loop each part
computerParts.foreach(part => {
    // find matching price
    switch (part) {
        case 'cpu':
            cpuPrice = 100;
            break;
        case 'motherboard':
            motherboardPrice = 100;
            break;
        case 'mouse':
            mousePrice = 100;
            break;
        case 'keyboard':
            cpuPrice = 100;
            break;
        default:
            break;
    }
});

// loop each part
//      get price from function

// get price
function getPrice(partName) {
    switch (partName) {
        case 'cpu':
            return 100;
            break;
        case 'motherboard':
            return 150;
            break;
        case 'mouse':
            return 90;
            break;
        case 'keyboard':
            return 50;
            break;
        default:
            break;
    }
}


// loop part, get price
computerParts.foreach(part => {
    getPrice(part)
});
// can actually be written in one line
//computerParts.foreach(getPrice);
// or
//computerParts.foreach(p => getPrice(p));
// or
//computerParts.foreach(p => getPrice(p));
/* #endregion */




