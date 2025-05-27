const container = document.querySelector("#eventList");

let card = document.createElement("div");
card.textContent = "New Event";
container.appendChild(card);

function updateUI(status) {
    container.innerHTML = status;
}
