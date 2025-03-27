function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}


let emptyObj = {};
let nonEmptyObj = { name: "John" };

console.log(isEmpty(emptyObj));
console.log(isEmpty(nonEmptyObj));