import { DateTime } from '../node_modules/luxon/src/luxon.js';

const date = () => {
  const dateWrapper = document.querySelector('.date');

  const twoDigits = (num) => {
    if (num < 10) return `0${num}`;
    return num;
  };

  setInterval(() => {
    const now = DateTime.now();
    const showDate = `${now.toLocaleString(DateTime.DATE_FULL)} ${now.hour}:${twoDigits(now.minute)}:${twoDigits(now.second)} hrs`;
    dateWrapper.innerHTML = showDate;
  }, 1000);
};

export default date;
