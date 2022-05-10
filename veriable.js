(function () {
    setTimeout(function () {
        console.log(5);
    }, 0);
    (async function () {
        await "Nothing";
        console.log(4);
    })();
    console.log(6)
})()
// output= 645

// ===================================

var count = 10;
function count() { return 20; }
console.log(typeof count); // output = number
// console.log(typeof count());  // output = count is not a function

// ====================================

const key = { "a": "b" };
let objy = { "a": "b" };
objy[key] = "obj";

// for (let c of objy) { // output = objy is not iterable
//     console.log(c); 
// }

// ====================================


var square1 = { x: 2, y: 3, area: () => this.x * this.y };

function Square(x, y) {
    this.x = x; this.y = y;
    this.area = () => this.x * this.y;
}

var square2 = new Square(2, 3);

console.log(square1.area(), square2.area()) // Output = NaN 6


// ==========================================

// What is signals- 
// The signals are a method of communication between processes. When a process receives a signal,
//  the process interrupts its execution and a signal handler is executed.

// SIGKILL (also known as Unix signal 15)—
// kills the process abruptly, producing a fatal error. It is always effective at terminating the process,
//  but can have unintended consequences.

// SIGTERM (also known as Unix signal 9)—
// tries to kill the process, but can be blocked or handled in various ways.
// It is a more gentle way to kill a process.

// SIGINT is the signal sent when we press Ctrl+C. The default action is to terminate the process.
//  However, some programs override this action and handle it differently.


// ====================================================

const EventEmitter = require('events');
let emitter = new EventEmitter();

emitter.on('myEvent', () => {
    console.log('hi 1');
});

emitter.on('myEvent', () => {
    console.log('hi 2');
});

emitter.emit('myEvent');
// output = Hi 1 and hi 2

// ==========================================

var promise1 = Promise.resolve(1);
var promise2 = Promise.resolve(2);

promise1.then(console.log)
promise1.then(console.log)

promise2.then(console.log).then(console.log)
//  output = 1 1 2 undefined

// ==============================================


let c = 1;
function test(c) {
    c = 2;
}
test(c);
console.log(c);  // Output =1
let obj = { "a": 1 }
function objTest(obj) {
    obj.a = 2;
}
objTest(obj);
console.log(obj.a);  // Output =2
let obj1 = { "a": 1 }
function objTest1(...obj1) {
    obj1.a = 2;
}
objTest1(obj1);
console.log(obj1.a);  // Output =1


// ================================================

// Destructuring- it possible to unpack values from arrays, or properties from objects,
//  into distinct variables.

let a, b;
[a = 5, b = 7] = [1];
console.log(a); // out- 1
console.log(b); // out- 7

// ==================================================

// Event Loop - Keep on running as long as there are event listeners registered.

    // Event loop is an endless loop, which waits for tasks, executes them and then sleeps until it receives more tasks.
    // The event loop executes tasks from the event queue only when the call stack is empty i.e. there is no ongoing task.
    // The event loop allows us to use callbacks and promises.

// Phases of the Event loop - 
//     Timers: Callbacks scheduled by setTimeout() or setInterval() are executed in this phase.
//     Pending Callbacks: I/O callbacks deferred to the next loop iteration are executed here.
//     Idle, Prepare: Used internally only.
//     Poll: Retrieves new I/O events.
//     Check: It invokes setIntermediate() callbacks.
//     Close Callbacks: It handles some close callbacks

// ===============================================================

// streams -
        // To handle and manipulate streaming data like a video, a large file, etc., 
        // we need streams in Node. The streams module in Node.js manages all streams.

// Buffer- 
        //A buffer is a temporary memory that a stream takes to hold some data until it is consumed.
