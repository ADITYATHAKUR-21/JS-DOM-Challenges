const toggleBtn = document.querySelector('.toggle-btn')
const closeBtn = document.querySelector('.close-btn')
const panel = document.querySelector('.panel')
const content = document.querySelector('.content')


toggleBtn.addEventListener("click", () => {
  panel.classList.add("active");
});


closeBtn.addEventListener("click", () => {
  panel.classList.remove("active");
});
