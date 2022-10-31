const images = [
    "0.png", "1.png", "2.png",  "3.png", "4.png", 
    "5.png", "6.png", "7.png", "8.png", "9.png", "10.png",
    "11.png", "12.png", "13.png", "14.png", "15.png"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.querySelector("img");
bgImage.src = `img/${chosenImage}`;