const refs = {
  daysEl: document.querySelector('[data-value="days"]'),
  hoursEl: document.querySelector('[data-value="hours"]'),
  minsEl: document.querySelector('[data-value="mins"]'),
  secsEl: document.querySelector('[data-value="secs"]'),
};
const { timerEl, daysEl, hoursEl, minsEl, secsEl } = refs;

class CountdownTimer {
  constructor(timerSet) {
    const { selector, targetDate } = timerSet;
    this.selector = selector;
    this.targetDate = targetDate;
  }

  start() {
    setInterval(() => {
      const currentDate = Date.now();
      const timeUntil = this.targetDate - currentDate;
      const days = String(
        Math.floor(timeUntil / (1000 * 60 * 60 * 24)),
      ).padStart(2, '0');
      const hours = String(
        Math.floor((timeUntil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      ).padStart(2, '0');
      const mins = String(
        Math.floor((timeUntil % (1000 * 60 * 60)) / (1000 * 60)),
      ).padStart(2, '0');
      const secs = String(
        Math.floor((timeUntil % (1000 * 60)) / 1000),
      ).padStart(2, '0');
      daysEl.textContent = days;
      hoursEl.textContent = hours;
      minsEl.textContent = mins;
      secsEl.textContent = secs;
    }, 1000);
  }
}

const courseFinishTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Feb 13, 2022'),
});

courseFinishTimer.start();
