const nameInput = document.getElementById('nameInput');
const jobInput = document.getElementById('jobInput');
const ageInput = document.getElementById('ageInput');
const bioInput = document.getElementById('bioInput');


const nameDis = document.getElementById('nameDisplay');
const jobDis = document.getElementById('JobDisplay');
const ageDis = document.getElementById('ageDisplay');
const bioDis = document.getElementById('bioDisplay');


nameInput.addEventListener('input', (e) => {
  nameDis.innerText = e.target.value
});

jobInput.addEventListener('input', (e) => {
  jobDis.innerText = e.target.value
})

ageInput.addEventListener('input', (e) => {
  ageDis.innerText = e.target.value
})

bioInput.addEventListener('input', (e) => {
  bioDis.innerText = e.target.value
})
