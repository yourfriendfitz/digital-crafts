const log = console.log;

const timerInput = document.getElementById("timerInput");
const timer = document.getElementById("timer");
const stop = document.getElementById("stop");

let time = 0;
let timerRunning = false;

const createCountdown = time => {
  return `<div class="countdown">${time}</div>`;
};

timerInput.addEventListener("keypress", e => {
  if (e.keyCode === 13) {
    if (isNaN(timerInput.value)) {
      return;
    } else {
      time = timerInput.value;
      timerRunning = true;
      timerStart(time);
    }
  }
});

stop.addEventListener("click", () => {
  timerRunning = false;
});

const countdown = time => {
  const count = createCountdown(time);
  timer.innerHTML = count;
};

const timerStart = time => {
  const timerInterval = setInterval(() => {
    countdown(time);
    time--;
    if (time < 0 | timerRunning === false) {
      clearInterval(timerInterval)
    }
  }, 1000);
};
