function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            multiplyNumeric(obj[key]);
        }
    }
}

let data = {
    width: 100,
    sizes: {
        small: 50,
        large: 200
    },
    title: "Menu"
};

console.log(data)
multiplyNumeric(data);
console.log(data)