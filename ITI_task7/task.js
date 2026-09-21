// task 1
let div = document.getElementById("myDiv");


let img = document.createElement("img");


img.setAttribute("src", "image.jpg");


div.appendChild(img);


alert("Number of child nodes: " + div.childNodes.length);


div.removeChild(img);


// task 2
let images = [
    "./mountain.jpg",
    "./beach.jpg",
    "./forest.jpg",
    "./waterfall.jpg"
];

let descriptions = [
    "Beautiful mountains at sunset",
    "A beautiful beach with clear water",
    "A peaceful green forest",
    "A beautiful waterfall in nature"
];

let currentIndex = 0;

let image = document.getElementById("myImage");
let description = document.getElementById("description");

let next = document.getElementById("next");
let prev = document.getElementById("prev");

next.onclick = function () {

    if (currentIndex < images.length - 1) {
        currentIndex++;

        image.src = images[currentIndex];
        description.innerHTML = descriptions[currentIndex];
    }
};

prev.onclick = function () {

    if (currentIndex > 0) {
        currentIndex--;

        image.src = images[currentIndex];
        description.innerHTML = descriptions[currentIndex];
    }
};