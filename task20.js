class Stock {
    constructor() {
        this.boxes = []; // Массив коробок {w, v, id}
        this.nextId = 0; // Следующий серийный номер
    }

    // Добавление новой коробки
    add(w, v) {
        const box = { w, v, id: this.nextId };
        this.boxes.push(box);
        this.nextId++;
        return box.id;
    }

    // Поиск коробки по минимальной грузоподъемности
    getByW(min_w) {
        let candidates = this.boxes.filter(box => box.w >= min_w);
        if (candidates.length === 0) return -1;

        // Находим коробку с минимальным w (если несколько - самую старую)
        candidates.sort((a, b) => a.w - b.w || a.id - b.id);
        const selected = candidates[0];

        // Удаляем выданную коробку
        this.boxes = this.boxes.filter(box => box.id !== selected.id);
        return selected.id;
    }

    // Поиск коробки по минимальному объему
    getByV(min_v) {
        let candidates = this.boxes.filter(box => box.v >= min_v);
        if (candidates.length === 0) return -1;

        // Находим коробку с минимальным v (если несколько - самую старую)
        candidates.sort((a, b) => a.v - b.v || a.id - b.id);
        const selected = candidates[0];

        // Удаляем выданную коробку
        this.boxes = this.boxes.filter(box => box.id !== selected.id);
        return selected.id;
    }
}


// Создаем склад
const stock = new Stock();

// Добавляем коробки
console.log(stock.add(10, 20)); // 0
console.log(stock.add(15, 15)); // 1
console.log(stock.add(20, 10)); // 2
console.log(stock.add(15, 25)); // 3

// Тестируем выдачу
console.log(stock.getByW(15)); // 1 (минимальная грузоподъемность 15)
console.log(stock.getByV(20)); // 0 (минимальный объем 20)
console.log(stock.getByW(25)); // -1 (нет подходящих коробок)
console.log(stock.getByV(5));  // 2 (оставшаяся коробка с v=10)

// Проверяем оставшиеся коробки
console.log(stock.boxes); // [{w: 15, v: 25, id: 3}]