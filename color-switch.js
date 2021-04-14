const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
};

let intId = null;
refs.btnStop.disabled = true;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function btnView(add, remove) {
   refs.btnStart.disabled = add;
   refs.btnStop.disabled = remove;
}

function changeColor() {
  intId = setInterval(() => {
    const randomIndex = randomIntegerFromInterval(0, colors.length - 1);
    refs.body.style.backgroundColor = `${colors[randomIndex]}`;
  }, 1000);

   btnView(true,false)
}

function stopChangeColor() {

  btnView(false, true)
  clearInterval(intId);
}

refs.btnStart.addEventListener('click', changeColor);
refs.btnStop.addEventListener('click', stopChangeColor);