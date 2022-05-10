// Prototypes are the mechanism by which JavaScript objects inherit features from one another

// Every object in JavaScript has a built-in property, which is called its prototype.
// The prototype is itself an object, so the prototype will have its own prototype, 
// making what's called a prototype chain. The chain ends when we reach a prototype that has null 
// for its own prototype.

const obj = {
    name: "test",
    getName: function () {
        return this.name
    },
    getRoll: function () {
        return this.roll
    }
}
console.log(obj);

const obj2 = {
    roll: 22,
    name: "Dev",
    __proto__: obj
}

console.log(obj2.getName());

// =============================

Array.prototype.show = function () { // Made own Prototype
    return this;
}
const cities = ['Delhi'];
console.log(cities.show());

Array.prototype.convetIntoObject = function () { // Made own Prototype
    let newObj = {}
    this.forEach((e) => {
        newObj[e] = e
    })
    return newObj;
}
console.log(cities.convetIntoObject());

// =====================================

// function MyPrototype(name, roll) { //This is constructor function
//     this.name = name;
//     this.roll = roll;
// }
// MyPrototype.prototype = obj;
// const checkProto = MyPrototype('Raj',"22");
