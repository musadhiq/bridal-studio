const humburger = document.querySelector(".humburgar");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".link");
const overlay = document.querySelector(".overlay");
const message = document.getElementById("message");
const button = document.querySelector(".msg");
humburger.addEventListener("click", (e) => {
  navlinks.classList.toggle("open");
  overlay.classList.toggle("open");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      navlinks.classList.remove("open");
      overlay.classList.remove("open");
    });
  });
});
overlay.addEventListener("click", (e) => {
  navlinks.classList.remove("open");
  overlay.classList.remove("open");
});

button.addEventListener("click", () => {
  let messageVal = message.value;
  button.setAttribute("href", "https://wa.me/+917558936055?text=" + messageVal);
});
