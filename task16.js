function Rabbit() {}
Rabbit.prototype = {
    eats: true
};
let rabbit = new Rabbit(); //  сохраняет ссылку на старый прототип

Rabbit.prototype = {}; // Новый Rabbit.prototype = {} влияет только на объекты, созданные после этого изменения.
Rabbit.prototype.eats = false; // изменения в новом прототипе не влияют на существующий объект.
console.log(rabbit.eats);
delete rabbit.eats; // у rabbit нет собственного поля eats, удалять нечего
delete Rabbit.prototype.eats; // удалили eats из прототипа
console.log(Rabbit.prototype.eats); // попытка удалить поле нового прототипа, а не старого
console.log(rabbit.eats); // true тк сыылается на старый прототип

