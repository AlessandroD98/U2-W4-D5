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
