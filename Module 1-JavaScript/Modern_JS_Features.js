function greet(name = "Guest") {
    console.log(`Hello, ${name}`);
}

const event = { name: "Dance", date: "2025-08-01" };
const { name, date } = event;

const events = [{ name: "A" }, { name: "B" }];
const cloned = [...events];
