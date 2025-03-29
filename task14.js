function Hamster(){
    this.stomach = [];

    this.eat = function(food){
        this.stomach.push(food);
    }
}

speedy = new Hamster();
lazy = new Hamster();

speedy.eat("apple");// Этот хомяк нашёл еду
console.log(speedy.stomach); // apple
console.log(lazy.stomach); // Голодный :(