const circle = document.querySelector('.progress');
const number = document.querySelector('.facts-element__value');

let counter = 0;

setInterval(() => {
  if (counter == 98) {
    clearInterval();
  } else {
    counter += 1;
    number.innerHTML = counter + "%";
  }
}, 20);