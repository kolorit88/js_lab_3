class Clock {
    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    displayTime() {
        const format = (num) => num < 10 ? `0${num}` : num;

        console.log(
            `${format(this.hours)}:${format(this.minutes)}:${format(this.seconds)}`
        );
    }
}

const myClock = new Clock(9, 30, 45);
myClock.displayTime();

const anotherClock = new Clock(23, 5, 7);
anotherClock.displayTime();