import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  startBtn: document.querySelector('[data-start]'),
  remainDays: document.querySelector('[data-days]'),
  remainHours: document.querySelector('[data-hours]'),
  remainMinutes: document.querySelector('[data-minutes]'),
  remainSeconds: document.querySelector('[data-seconds]'),
};

disableBtn();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const selected = selectedDates[0];

    if (selected < Date.now()) {
      window.alert('Please choose a date in the future');
    } else {
      enableBtn();
      console.log(selected);

      refs.startBtn.addEventListener('click', () => {
        const intervalId = setInterval(() => {
          if (Date.now() >= selected) {
            clearInterval(intervalId);
            return;
          }

          const currentTime = new Date();
          const ms = selected - currentTime;

          const timeLeft = convertMs(ms);

          refs.remainDays.textContent = addLeadingZero(timeLeft.days);
          refs.remainHours.textContent = addLeadingZero(timeLeft.hours);
          refs.remainMinutes.textContent = addLeadingZero(timeLeft.minutes);
          refs.remainSeconds.textContent = addLeadingZero(timeLeft.seconds);
        }, 1000);
      });
    }
  },
};

flatpickr('#datetime-picker', options);

function disableBtn() {
  refs.startBtn.disabled = true;
}

function enableBtn() {
  refs.startBtn.disabled = false;
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
  console.log(days, hours, minutes, seconds);

  return { days, hours, minutes, seconds };
}
