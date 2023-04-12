function loadImage() {
    let image = document.getElementById("image");
    let pickImage = Math.ceil(Math.random() * 9);
    image.src = `./images/${pickImage}.jpg`;
};

window.onload = loadImage();
let resetButton = document.getElementById("resetImage").addEventListener('click', loadImage);