let timerId = null;
const NOTIFICATION_DELAY = 1000;
let activeStatus = false;


const refs = {
  startButton: document.querySelector('button[data-start]'),
  stopButton: document.querySelector('button[data-stop]'),
};
refs.stopButton.classList.add('active-style');

refs.startButton.addEventListener('click', startSwicher);
refs.stopButton.addEventListener('click', stopSwicher);

function startSwicher() {
  if (activeStatus) {
    return;
  }
  activeStatus = true;
  refs.startButton.classList.add('active-style');
  refs.stopButton.classList.remove('active-style');
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, NOTIFICATION_DELAY);
}

function stopSwicher() {
  clearInterval(timerId);
  activeStatus = false;
    refs.startButton.classList.remove('active-style');
    refs.stopButton.classList.add('active-style');

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log('qwqweq');
