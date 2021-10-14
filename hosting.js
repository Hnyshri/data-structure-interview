
for (var i = 0; i <= 6; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

for (let i = 0; i <= 6; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}


let a;
const b = 5;

console.log(a); // undefine
console.log(b);

const obj = {
    name: "shri"
}
console.log(obj.name); 

obj.name = 'gupta';  // you can change the object value of const... but not change the const value
console.log(obj.name);
