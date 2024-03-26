function receivesAFunction(greetings){
    return `${greetings()}`
}

greetings()

function returnsANamedFunction() {
    return function namedFunction(){}   
}

function returnsAnAnonymousFunction() {
    return function() {};
}




