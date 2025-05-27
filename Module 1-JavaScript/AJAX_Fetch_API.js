function submitData(data) {
    document.querySelector("#status").textContent = "Sending...";
    setTimeout(() => {
        fetch("https://mockapi.com/register", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(() => document.querySelector("#status").textContent = "Success")
            .catch(() => document.querySelector("#status").textContent = "Error");
    }, 1000);
}
