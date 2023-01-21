let timerId = null;
const NOTIFICATION_DELAY = 1000;
let activeStatus = false;
const refs = {
  startButton: document.querySelector('button[data-start]'),
  stopButton: document.querySelector('button[data-stop]'),
};

refs.startButton.addEventListener('click', startSwicher);
refs.stopButton.addEventListener('click', stopSwicher);

function startSwicher() {
  if (activeStatus) {
    return;
  }
  activeStatus = true;
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, NOTIFICATION_DELAY);
}

function stopSwicher() {
  clearInterval(timerId);
  activeStatus = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
