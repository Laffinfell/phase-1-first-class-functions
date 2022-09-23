function receivesAFunction(spy) {
    spy();
}

function returnsANamedFunction() {
    return function shouting(parameter) {

    }
}


function returnsAnAnonymousFunction() {
    return function () {
        
    }
}