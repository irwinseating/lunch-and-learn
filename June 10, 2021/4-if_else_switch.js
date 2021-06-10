// if else
// if statements observe values that can be boolean (true or false) 
if (true) {
    // do something
}

if (1 === 1) {
    // do something
}

if (1 === 0) {
    // won't do anything
}

var isAnActiveEmailClient = function () {
    if (timeOfDay = afternoon) {
        return true;
    }

    else false;
}



if (isAnActiveEmailClient()) {
    console.log('hey, we are active');
    console.log('this other thing');
} else if (time < noon) {
    console.log('try again later today');
} else
    console.log('try again tomorrow afternoon');
}



// else can be added to branch results.
if (true) {
    // do one thing
} else {
    //do this other thing
}

// you can add if/else to have more complex situations
var num = 1;
if (num === 1) {
    // do something with 1
} else if (num === 2) {
    // do something with 2
} else {
    // it's a different number
}

// these items can _nested_ for more options
if (num > 0) {
    if (num === 1) {

    }
} else { // is <= 0
    if (num === -1) {

    }
}




// switch statement
// switch statements can be a good alternative to an if statement
switch (value) {
    case possibleValue1:
        // do something here
        break;
    case possibleValue2:
        // do something here
        break;
    default:
        break;
}

var color = 'red';
switch (value) {
    case 'red':
    case 'blue':
    case 'green':
        doTheSameThing()
        break;
    case 'purple':
        break;
    case 'orange':
        doSomethingDifferent();
        break;
    default:
        // it's a different number
        break;
}




/************
 *  Example
 */
// get parts
var computerParts = ['cpu', 'motherboard', 'mouse', 'keyboard', 'gpu'];

// declare variables
var cpuPrice;
var motherboardPrice;
var mousePrice;
var keyboardPrice;
var gpuPrice;



// setting price with if/else
computerParts.foreach(part => {
    if (part === 'cpu') {
        cpuPrice = 100;
    } else if (part === 'motherboard') {
        motherboardPrice = 100;
    } else if (part === 'mouse') {
        mousePrice = 100;
    } else if (part === 'keyboard') {
        keyboardPrice = 100;

    } else if (part === 'keys') {
        keyboardPrice = 100;
    }
});



// setting prices with a switch
computerParts.foreach(part => {
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
        default: break;
    }
});

