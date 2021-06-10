// pseudocode is a way to describe code in a more readable fashion. It's often good when you're initially thinking through a problem or trying to descibe how to do somethign to someone non-technical.


// We need a a function that emails a client.

//  clients -> list of clients
//  loop clients
//  {
//      get client data from database
//      if client is active
//          send email
//  }


// we start to stub code into real function
function emailClients(listOfClients) {
    //  loop clients
    //  {
    //      get client data from database
    //      if client is active
    //          send email
    //  }
}


// we start to stub code into real function
function emailClients(listOfClients) {
    listOfClients.forEach(client => {
        //      get client data from database
        //      if client is active
        //          send email
    });
}


// we start to stub code into real function
function emailClients(listOfClients) {
    listOfClients.forEach(client => {
        const clientRecord = database.lookup(client);
        if (clientRecord.isActive()) {
            // send email
        }
    });
}

// 🎉
// We'll revise this in the recap
function emailClients(listOfClients) {
    listOfClients.forEach(client => {
        const clientRecord = database.lookup(client);
        if (clientRecord.isActive()) {
            email(clientRecord);
        }
    });
}