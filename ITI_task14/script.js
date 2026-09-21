let closeBtn = document.getElementById("closeBtn");
let personImage = document.getElementById("personImage");
let chip = document.querySelector(".chip");

personImage.onclick = function () {
chip.classList.add("open");
};

closeBtn.onclick = function () {
chip.classList.remove("open");
};
