/**
 * Write your challenge solution here
 */

let clock = document.querySelector(".clock");
let hourClass = document.querySelector(".hour");
let minuteClass = document.querySelector(".minute");
let secondsClass = document.querySelector(".second");
let digital_clock = document.querySelector(".digital-clock");
let dateClass = document.querySelector(".date");
let container = document.querySelector(".container")


//Days for Display days
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//Months for display month
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octumber",
  "November",
  "December",
];

function printNumber() {
  // Create a span for give numbers
  let numberContainer = document.createElement("span");
  numberContainer.className = "span";
  clock.appendChild(numberContainer);
  
  //Styling for numbers it is very important
  clock.style.position = "realtive"
  numberContainer.style.position = "absolute"
  numberContainer.style.height = "100%"
  numberContainer.style.width = "100%"
  // display in column format
  container.style.flexDirection = "column";

  // Loop for create 12 numbers and rotate them
  for (let i = 1; i <= 12; i++) {
    numberContainer.innerHTML += `<div class="number" style="transform : rotate(${
      i * 30 // it is accoding 360/12 = 30 Spacing equal them
    }deg)">${i}</div>`;
  }
}

printNumber();

// For rotating arrows
function setTime() {
  //Function for get date,month,day,hour,minute,second
  let time = new Date();
  let month = time.getMonth();
  let day = time.getDay();
  let date = time.getDate();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let year = time.getFullYear()

  // it is used for rotate hour arrow according time (360 used for rotate them)
  hourClass.style.transform = `rotate(${(hours / 12) * 360}deg)`;

  // it is used for rotate minute arrow according time (60 for 60 minutes,360 used for rotate them)
  minuteClass.style.transform = `rotate(${(minutes / 60) * 360}deg)`;

  // it is used for rotate second arrow according time (60 for 60 seconds,360 used for rotate them)
  secondsClass.style.transform = `rotate(${(seconds / 60) * 360}deg)`;

  // Create a digital clock display hour,minute,second , month , day according system
  // digital_clock.innerHTML = `${hours} : ${minutes} : ${seconds}`;
  digital_clock.innerHTML = `
  ${hours < 10 ? '0' + hours : hours} :
  ${minutes < 10 ? '0' + minutes : minutes} :
  ${seconds < 10 ? '0' + seconds : seconds}
`;
  dateClass.innerHTML = `${days[day]}, ${months[month]} ${date} ${year}`;
}

setTime();

//Rotate after every 1 second
setInterval(setTime, 1000); // 1 second
