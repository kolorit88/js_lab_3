function Employee(name, department, phone, salary) {
    this.name = name;         // Имя
    this.department = department; // Отдел
    this.phone = phone;       // Телефон
    this.salary = salary;     // Зарплата

    this.displayInfo = function() {
        console.log(`Сотрудник: ${this.name}`);
        console.log(`Отдел: ${this.department}`);
        console.log(`Телефон: ${this.phone}`);
        console.log(`Зарплата: ${this.salary} руб.`);
    };
}


const employee1 = new Employee(
    "Иван Петров",       // Имя
    "IT-отдел",          // Отдел
    "+7 (123) 456-7890", // Телефон
    85000                // Зарплата
);