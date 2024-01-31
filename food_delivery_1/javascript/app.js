window.addEventListener('scroll',()=>{
  const header = document.getElementById("header")
  header.classList.toggle("action", window.scrollY > 0);
})

const navbar_nav =  document.querySelector(".navbar-nav");
const toggle = document.querySelector(".toggle");
const item = document.querySelector('nav-item');

toggle.addEventListener('click', ()=>{
  navbar_nav.classList.toggle("active")
})
