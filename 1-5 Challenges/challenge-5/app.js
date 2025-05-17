/**
 * Write your challenge solution here
 */
// Image data
const images = [
  {
    url: "https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Beautiful Mountain Landscape",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Ocean Sunset View",
  },
  {
    url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Autumn Forest Path",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Urban City Skyline",
  },
];

let imagetrack = document.getElementById("carouselTrack");
let imagecaption = document.getElementById("caption");
let prevButton = document.getElementById("prevButton");
let nextButton = document.getElementById("nextButton");
let autoPlayButton = document.getElementById("autoPlayButton");
let timerDisplay = document.getElementById("timerDisplay");

let currentImageIndex = 0;
let timer = null;
let image = document.createElement("img");
let caption = document.createElement("span");

//Show next Image
function nextImg() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage();
}

//Show previous Image
function prevImg() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage();
}

//Show Images on webpage
function showImage() {
  image.src = images[currentImageIndex].url;
  image.classList.add("carousel-slide");
  caption.textContent = images[currentImageIndex].caption;
  imagetrack.appendChild(image);
  imagecaption.appendChild(caption)
}
//Render Images
showImage();

prevButton.addEventListener("click", prevImg);
nextButton.addEventListener("click", nextImg);

//Add Indicators
images.forEach(() => {
  const nav = document.getElementById("carouselNav")
  let indicators = document.createElement('div')
  indicators.className = 'carousel-indicator'
  nav.appendChild(indicators)
});

//Timer function for auto slide images
autoPlayButton.addEventListener('click',function () {
  if (timer) {
    clearInterval(timer);
    autoPlayButton.textContent = "Start Timer"; 
    timerDisplay.textContent = "";
  } else {
    timer = setInterval(nextImg, 5000); // 5 seconds
    autoPlayButton.textContent = "Stop Timer";
    timerDisplay.textContent = `Auto-playing every 5 seconds...`;
  }
})
