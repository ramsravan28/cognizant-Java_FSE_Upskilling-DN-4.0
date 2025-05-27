document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    let name = this.elements["name"].value;
    let email = this.elements["email"].value;
    if (!name || !email) {
        document.querySelector("#error").textContent = "Missing fields";
    }
});
