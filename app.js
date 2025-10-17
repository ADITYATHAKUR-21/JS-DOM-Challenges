const accordingBtn = document.querySelectorAll(".accordion-button");
const accordingContant = document.querySelectorAll('.accordion-content')

accordingBtn.forEach(headers => {
  headers.addEventListener("click", () => {

    const accordingItems = headers.parentElement;
    const accordingContant = accordingItems.querySelector('.accordion-content');

    accordingItems.classList.toggle('active')


  });

});
