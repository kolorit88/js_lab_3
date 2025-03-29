let animal = {
    eat() {
        this.full = true;
    }
};

let rabbit = {
    __proto__: animal
};

rabbit.eat();
console.log(rabbit.full); // <-
console.log(animal.full);
