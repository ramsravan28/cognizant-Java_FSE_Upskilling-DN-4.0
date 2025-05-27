let events = [
    { name: "Music Night", category: "music" },
    { name: "Art Show", category: "art" }
];

events.push({ name: "Jazz Fest", category: "music" });

let musicEvents = events.filter(e => e.category === "music");

let formatted = events.map(e => `Event: ${e.name}`);
