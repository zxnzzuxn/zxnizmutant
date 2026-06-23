const drawButton = document.getElementById('drawButton');
const resultContainer = document.getElementById('result');
const setsInput = document.getElementById('sets');

const colors = ['yellow', 'green', 'blue', 'red', 'purple'];

function generateLottoNumbers() {
  const numbers = Array.from({ length: 45 }, (_, index) => index + 1);
  const selected = [];

  while (selected.length < 6) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    selected.push(numbers.splice(randomIndex, 1)[0]);
  }

  return selected.sort((a, b) => a - b);
}

function renderSets(count) {
  resultContainer.innerHTML = '';

  for (let i = 0; i < count; i += 1) {
    const setNumbers = generateLottoNumbers();
    const setElement = document.createElement('div');
    setElement.className = 'lotto-set';

    setNumbers.forEach((number, index) => {
      const ball = document.createElement('div');
      ball.className = `ball ${colors[index % colors.length]}`;
      ball.textContent = number;
      setElement.appendChild(ball);
    });

    resultContainer.appendChild(setElement);
  }
}

function handleDraw() {
  const count = Math.max(1, Math.min(10, Number(setsInput.value) || 1));
  setsInput.value = count;
  renderSets(count);
}

if (drawButton) {
  drawButton.addEventListener('click', handleDraw);
}

window.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleDraw();
  }
});
