const user = {
    name: "John"
};

// 1. Это сработает? Да, потому что меняется свойство объекта, а не сама переменная.
user.name = "Pete";  // ✅ Работает! Теперь user = { name: "Pete" }

// 2. А это? Нет, вызовет ошибку, потому что const запрещает переприсваивание.
user = 123;          // ❌ TypeError: Assignment to constant variable.