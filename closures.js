// closures
// A closure is a function having access to the parent scope,
// even after the parent function has closed.

// a is Lexical scope 


var sum = function (a) {
    console.log("hello " + a)
    let c = 8;
  
    //  An anonymous function is a function without a name. 
    // An anonymous function is often not accessible after its initial creation.
    return function (b) {
        return a + b + c;   // a is Lexical scope 
        // Lexical scope is an important part of closures, but it is not a closure by itself.

    }
}

var storeFunction = sum(2);
console.log(storeFunction(10));


// ========================================================


var sumVarible = function (a, b, c) {
    return {
        getSumTwo: function () {
            return a + b;
        },
        getSumThree: function () {
            return a + b + c;
        }
    }
}

var storeVal = sumVarible(1, 2, 3);
console.log(storeVal.getSumTwo());
console.log(storeVal.getSumThree());


// =========================================

function init() {
    var name = 'Mozilla'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
        console.log(name); // use variable declared in the parent function
    }
    displayName();
}
init();