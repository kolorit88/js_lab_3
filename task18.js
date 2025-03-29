class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Rabbit extends Animal {
    constructor(name) {
        super(name); // Вызываем параметриз. конструктор класса Animal
        this.created = Date.now();
    }
}
let rabbit = new Rabbit("Белый кролик");
console.log(rabbit.name);