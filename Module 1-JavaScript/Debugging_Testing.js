document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Form submitted");
    let payload = {
        name: this.elements["name"].value,
        email: this.elements["email"].value
    };
    console.log(payload);
    fetch("https://mockapi.com/submit", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" }
    });
});
