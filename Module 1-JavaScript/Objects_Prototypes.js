function Event(name, date, seats) {
    this.name = name;
    this.date = date;
    this.seats = seats;
}

Event.prototype.checkAvailability = function () {
    return this.seats > 0;
};

const event1 = new Event("Art", "2025-07-01", 10);
console.log(Object.entries(event1));
