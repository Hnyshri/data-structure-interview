// callback function

// A callback function is a function passed into another function as an argument,
// which is then invoked inside the outer function to complete some kind of routine or action.

const data = [
    { name: "shriyansh", age: 25 },
    { name: "rohit", age: 34 }
];

function getData() {
    setTimeout(() => {
        data.forEach((value, index, array) => {
            console.log(value.name, index);
        });
    }, 1000);
}

function addMoreData(newData, callback) { // async callback function
    setTimeout(() => {
        data.push(newData);
        callback();
    }, 2000);
}

function promiseFun(newData) {

    // Promise function
    // The Promise object represents the eventual completion (or failure) of an
    // asynchronous operation and its resulting value.

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.push(newData);

            let error = false;
            if (!error) {
                resolve();
            } else {
                reject('Some thing went Wrong...');
            }
        }, 2000);
    });
}

async function asyncFunction(){
   await promiseFun({ name: 'text', age: 36 });
   getData();
}

addMoreData({ name: 'gaurav', age: 36 }, getData);
promiseFun({ name: 'suneel', age: 3 }).then(getData).catch(err => console.log(err));
asyncFunction();