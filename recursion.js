// Recursion - when function call itself
// otherwise it will get called for infinite time\
// if a function calll itself then there must be an end points


let counter = 1;
function recursion(number) {
    if (counter > number) {
        return;
    }
    console.log("hello");
    counter++;
    recursion(number);
}
recursion(10);