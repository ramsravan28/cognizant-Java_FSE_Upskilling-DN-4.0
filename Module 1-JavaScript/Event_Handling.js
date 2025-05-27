document.querySelectorAll(".registerBtn").forEach(btn => {
    btn.onclick = () => alert("Registered");
});

document.querySelector("#categorySelect").onchange = function () {
    alert(this.value);
};

document.querySelector("#searchInput").onkeydown = function (e) {
    console.log(e.key);
};
