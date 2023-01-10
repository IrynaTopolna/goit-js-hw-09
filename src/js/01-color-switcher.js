{
  /* <button type="button" data-start>Start</button>
<button type="button" data-stop>Stop</button> */
}

const startBtnRef = document.querySelector('[data-start]');
const stopBtnRef = document.querySelector('[data-stop]');

const colorSwitcher = {
  intervalId: 0,

  start() {
    this.intervalId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    console.log('start');
  },

  stop() {
    clearInterval(this.intervalId);
    console.log('stop');
  },
};

startBtnRef.addEventListener('click', () => {
  colorSwitcher.start();
  disableBtn();
});

stopBtnRef.addEventListener('click', () => {
  colorSwitcher.stop();
  enableBtn();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function disableBtn() {
  startBtnRef.disabled = true;
  stopBtnRef.disabled = false;
}

function enableBtn() {
  startBtnRef.disabled = false;
  stopBtnRef.disabled = true;
}
