const burger = document.querySelector('.burger');

if (burger) {
  const nav = document.querySelector('.nav');
  burger.addEventListener("click", function (e) {
    document.body.classList.toggle('lock')
    burger.classList.toggle('open');
    nav.classList.toggle('open');
  })
}



