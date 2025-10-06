const redBtn = document.getElementById('redButton');
const greenBtn = document.getElementById('greenButton');
const blueBtn = document.getElementById('blueButton');
const purpleBtn = document.getElementById('purpleButton');
const resetButton   = document.getElementById('resetButton');
const text = document.getElementById('mainHeading')



redBtn.addEventListener('click',() => {
  text.style.color = 'Red'
});

greenBtn.addEventListener('click', () => {
  text.style.color = 'Green'
});

blueBtn.addEventListener('click', () => {
  text.style.color = 'Blue'
});

purpleBtn.addEventListener('click', () => {
  text.style.color = 'Purple'
});

resetButton.addEventListener('click', () => {
  text.style.color = ''
})
