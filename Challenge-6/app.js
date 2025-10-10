// const hourHand = document.querySelector('.hour');
// const minuteHand = document.querySelector('.minute');
// const secondHand = document.querySelector('.second');
// const Time = document.getElementById('digital-clock');
// const dates = document.getElementById('date');



// function runingClock () {
//   const now = new Date();

//   const seconds = now.getSeconds();
//   const minutes = now.getMinutes();
//   const hours = now.getHours();


//   const secondDeg = (seconds/ 60) * 360
//   const minuteDeg = (minutes/ 60) * 360 + (seconds/ 60) * 6;
//   const hourDeg = (hours / 12 ) * 360 + (minutes / 6) * 30;

//   secondHand.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
//   minuteHand.style.transform = `translateX(-50%) rotate(${minuteDeg})deg`;
//   hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
// }
// runingClock();

// function clock() {
//   const now = new Date();


//   const hours = now.getHours().toString().padStart(2, '0');
//   const minutes = now.getMinutes().toString().padStart(2, '0');
//   const seconds = now.getSeconds().toString().padStart(2, '0');
//   const day = now.getDate()
//   const month = now.getMonth()
//   const year = now.getFullYear()

//   Time.innerText = `${hours}:${minutes}:${seconds}`
//   dates.innerText = `${day}/${month}/${year}`


// }

// setInterval(clock, 1000);

// clock();




const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second');
const digitalClock = document.getElementById('digital-clock');
const dateElement = document.getElementById('date');

function updateClock() {
  const now = new Date();

  // Analog clock rotation
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondDeg = (seconds / 60) * 360;
  const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hourDeg = (hours / 12) * 360 + (minutes / 60) * 30;

  secondHand.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
  hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;

  // Digital clock
  const formattedTime = now.toLocaleTimeString('en-US', {
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  digitalClock.textContent = formattedTime;

  // Date
  const formattedDate = now.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  dateElement.textContent = formattedDate;
}

setInterval(updateClock, 1000);
updateClock(); // initial call
