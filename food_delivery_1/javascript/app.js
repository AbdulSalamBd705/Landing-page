window.addEventListener('scroll',()=>{
  const header = document.getElementById("header")
  header.classList.toggle("action", window.scrollY > 0);
})