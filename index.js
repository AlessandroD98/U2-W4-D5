let element = document.getElementById("Header").offsetHeight;
console.log(element);
const navbar = document.getElementById("NavBar");
const li = document.getElementById("Li");
window.onscroll = () => {
  if (window.scrollY > element) {
    navbar.classList.add("NewNavBar");
    li.classList.add("NewLi");
  } else {
    navbar.classList.remove("NewNavBar");
    li.classList.remove("NewLi");
  }
};
setInterval(DisappierM, 40);
function DisappierM() {
  let g = document.querySelectorAll("svg g[stroke-linecap= 'butt']");
  let randg = g[Math.floor(Math.random() * g.length)];
  randg.style.transition = "1.1s";
  if (randg.getAttribute("opacity") == 1) {
    randg.setAttribute("opacity", "0");
  } else {
    randg.setAttribute("opacity", "1");
  }
}

// for (let i = 0; i < g.length; i++) {
//   const element = g[i];
//   if (element.getAttribute("opacity") == 0) {
//     element.setAttribute("opacity", "1");
//   }
// }
