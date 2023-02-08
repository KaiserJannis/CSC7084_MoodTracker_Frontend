const currentPage = document.location.pathname;
console.log(currentPage, "current");
const navLinks = document.querySelectorAll(".nav-item a");

navLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
    console.log(link, "active");
  }
  console.log(link.getAttribute("href"));
});
