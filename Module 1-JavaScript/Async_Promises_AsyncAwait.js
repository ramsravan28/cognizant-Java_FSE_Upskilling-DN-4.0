fetch("events.json")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

async function getEvents() {
    let res = await fetch("events.json");
    let data = await res.json();
    console.log(data);
}

document.querySelector("#loading").style.display = "block";
