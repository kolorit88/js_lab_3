let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};
console.log(rabbit.jumps); // true (1)
delete rabbit.jumps; // Удаляем jumps из rabbit
console.log(rabbit.jumps); // null (2)
delete animal.jumps; // Удаляем jumps из animal
console.log(rabbit.jumps); // undefined (3)