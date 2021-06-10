if (false) {
    console.log('this is true')
}

console.log('always print this')

class Client {
    _isActive; _isActive;

    isActive() {
        return this._isActive;
    }
    constructor(name, isActive) {
        this.name = name;
        this._isActive = isActive;
    }
}

var clientArray = [
    new Client('client_1', true),
    new Client('client_2', true),
    new Client('client_3', false),
    new Client('client_4', false),
    new Client('client_5', false),
    new Client('client_6', true),
    new Client('client_7', false)
];

var email = function (client) {
    console.log(`Sending email to ${client.name}`)
}

clientArray.forEach(client => {
    if (client.isActive()) {

        email(client);
    }
})

function emailClients(listOfClients) {
    listOfClients.forEach(client => {
        const clientRecord = database.lookup(client);
        if (clientRecord.isActive()) {
            email(clientRecord);
        }
    });
}
