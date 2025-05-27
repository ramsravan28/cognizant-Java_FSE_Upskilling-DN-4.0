const events = [
    { name: "Yoga", date: "2025-05-10", seats: 10 },
    { name: "Dance", date: "2024-12-01", seats: 0 },
    { name: "Music", date: "2025-07-20", seats: 5 }
];

events.forEach(e => {
    if (new Date(e.date) > new Date() && e.seats > 0) {
        console.log(e.name);
    }
});

try {
    let selectedEvent = events[0];
    if (selectedEvent.seats > 0) selectedEvent.seats--;
    else throw "No seats";
} catch (err) {
    console.log(err);
}
