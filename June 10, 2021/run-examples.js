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
        this.isActive = isActive;
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
