const Carousel = document.getElementById('carousel');
const CarouselTrack = document.getElementById('carouselTrack');
const Caption = document.getElementById('caption');

const prvBtn = document.getElementById('prevButton');
const nexBtn = document.getElementById('nextButton');
const carouselNav = document.getElementById('carouselNav');
const autoPlay = document.getElementById('autoPlayButton');
const timeDis = document.getElementById('timerDisplay');


const slidesData = [
  { src: 'https://images.pexels.com/photos/34207348/pexels-photo-34207348.jpeg', caption: 'Beautiful Mountains' },
  { src: 'https://images.pexels.com/photos/34224228/pexels-photo-34224228.jpeg', caption: 'Peaceful Lake' },
  { src: 'https://images.pexels.com/photos/15286/pexels-photo.jpg', caption: 'Green Forest' },
  { src: 'https://images.pexels.com/photos/34175093/pexels-photo-34175093.jpeg', caption: 'Golden Desert' },
  { src: 'https://images.pexels.com/photos/34192189/pexels-photo-34192189.jpeg', caption: 'Snowy Peaks' }
];


let currentIndex = 0;
let autoPlayActive = false;
let autoPlayTimer = null;
let countdownTimer = null;


slidesData.forEach((slide) => {
  const img = document.createElement('img');
  img.src = slide.src
  img.alt = slide.caption
  img.width = 1000;
  img.height = 700;
  img.style.objectFit = "cover";
  CarouselTrack.appendChild(img);

})

function updateCarousel() {
  CarouselTrack.style.transform = `translateX(-${currentIndex * 900}px)`;
  Caption.textContent = slidesData[currentIndex].caption;
}

nexBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slidesData.length;
  updateCarousel();
});


prvBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slidesData.length) % slidesData.length;
  updateCarousel();
});

autoPlay.addEventListener('click', () => {
  if (autoPlayActive) {
    clearInterval(autoPlayTimer);
    autoPlay.textContent = 'Auto Play';
    timeDis.textContent = '';
  } else {
    autoPlay.textContent = 'Stop';
    let seconds = 3;
    timeDis.textContent = `Next in ${seconds}s`;

    autoPlayTimer = setInterval(() => {
      currentIndex = (currentIndex + 1) % slidesData.length;
      updateCarousel();
      seconds = 3;
    }, 3000);

    // Optional: countdown timer display
    setInterval(() => {
      if (autoPlayActive) {
        seconds--;
        if (seconds <= 0) seconds = 3;
        timeDis.textContent = `Next in ${seconds}s`;
      }
    }, 1000);
  }
  autoPlayActive = !autoPlayActive;
});


updateCarousel();
