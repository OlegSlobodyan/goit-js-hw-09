import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
let isActive = false;
let parseTime = 0;
let currentDay = 0;
const refs = {
  startButton: document.querySelector('button[data-start]'),
  dataDays: document.querySelector('span[data-days]'),
  dataHours: document.querySelector('span[data-hours]'),
  dataMinutes: document.querySelector('span[data-minutes]'),
  dataSeconds: document.querySelector('span[data-seconds]'),
};
if (!isActive) {
  refs.startButton.classList.add('active-style');
} else if (isActive) {
  refs.startButton.classList.remove('active-style');
}
console.dir(refs.startButton.classList);
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    parseTime = selectedDates[0].getTime() - Date.now();
    currentDay = selectedDates[0].getDate();
    if (selectedDates[0].getDate() <= new Date().getDate()) {
      Notiflix.Notify.failure('Будь ласка, оберіть дату в майбутньому!');
    } else {
      isActive = true;
      refs.startButton.classList.remove('active-style');
    }
  },
};

flatpickr('#datetime-picker', options);

refs.startButton.addEventListener('click', start);

function start() {
  if (!isActive || currentDay === new Date().getDate()) {
    return;
  }
  isActive = false;
  const startTime = Date.now();
  const intervalId = setInterval(() => {
    let carrentTime = Date.now();
    const deltaTime = carrentTime - startTime;
    const timer = parseTime - deltaTime;

    const { days, hours, minutes, seconds } = convertMs(timer);
    refs.dataDays.textContent = addLeadingZero(days);
    refs.dataHours.textContent = addLeadingZero(hours);
    refs.dataMinutes.textContent = addLeadingZero(minutes);
    refs.dataSeconds.textContent = addLeadingZero(seconds);

    if (timer === 0) {
      clearInterval(intervalId);
    }
  }, 1000);
}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
