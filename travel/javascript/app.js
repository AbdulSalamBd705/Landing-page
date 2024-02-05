//========== Start Body sun moon ==========//
const body = document.querySelector("body");
const sun = document.querySelector(".fa-sun");
const moon = document.querySelector(".fa-moon");
const active_sun = document.querySelector(".active_sun");

sun.addEventListener("click", ()=>{
  body.classList.add("sun");
  body.classList.remove("moon");
});
moon.addEventListener("click", ()=>{
  body.classList.add("moon");
  body.classList.remove("sun")
})
sun.addEventListener("click", ()=>{
  sun.classList.add("sun");
  moon.classList.remove("moon");
  active_sun.classList.remove("active_sun")
});
moon.addEventListener("click", ()=>{
  moon.classList.add("moon");
  sun.classList.remove("sun");
  active_sun.classList.remove("active_sun")
})
//========== End Body sun moon ==========//
//========== Start Bar And navbar_nav ==========//
const navbar_nav = document.querySelector(".navbar-nav");
const bar = document.querySelector(".fa-bars-staggered");


bar.addEventListener("click", ()=>{
  navbar_nav.classList.toggle("active")
})
//========== End Bar And navbar_nav ==========//
//========== Start window scroll and box-shadow ==========//
window.addEventListener("scroll", ()=>{
  const wrapper = document.querySelector(".wrapper");
  wrapper.classList.toggle("sticky", window.scrollY > 0)
})
//========== End window scroll and box-shadow ==========//
