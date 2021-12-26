function receivesAFunction(callback) {
    
   return callback()

}

function returnsANamedFunction() {

    return function fnWithAName(){}

}

function returnsAnAnonymousFunction() {

    return () => {
        
        console.log("aqui esta tu function")

    }

}