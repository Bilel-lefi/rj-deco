const images = [
  "images/est-removebg-preview.png",
  "images/club-removebg-preview.png",
  "images/Etoile.jpg",
  "images/fcb.jpg",
];

let currentIndex = 0;

function showImage(index) {
  const sliderImage = document.getElementById("sliderImage");
  sliderImage.src = images[index];
}

function prevImage() {
  currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  showImage(currentIndex);
}

function nextImage() {
  currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
  showImage(currentIndex);
}
