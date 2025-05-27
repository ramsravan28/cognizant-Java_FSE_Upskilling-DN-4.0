function addEvent(name, date) {
    return { name, date };
}

function registerUser(event) {
    event.seats--;
}

function filterEventsByCategory(events, category) {
    return events.filter(e => e.category === category);
}

function categoryCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

function searchEvents(events, callback) {
    return events.filter(callback);
}
