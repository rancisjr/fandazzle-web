import Cursor from "./js/cursor";
import { gsap } from "gsap";

const body = document.querySelector("body");

window.onload = () => {
  body.classList.remove("loading");
  gsap.from(body, {
    opacity: 0,
    duration: 1,
    ease: "Power3.easeInOut",
  });
  const cursor = new Cursor(document.querySelector(".cursor"));
};



  const cursor = document.querySelector('.cursor');
  document.addEventListener('mousemove', (e) => {
     cursor.style.left = e.pageX + 'px';
     cursor.style.top = e.pageY + 'px';
  })

function updateList() {
     const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
         return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
     });

     document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));

     document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-circle");
     
}

updateList();
window.addEventListener('scroll', () => {
   updateList();
});

