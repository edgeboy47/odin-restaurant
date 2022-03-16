import './style.css';

function build() {
  const content = document.querySelector(".content");
  const header = document.createElement("header");
  const homeTab = document.createElement("div");
  const menuTab = document.createElement("div");
  const contactTab = document.createElement("div");

  menuTab.innerHTML = "Menu";
  menuTab.classList.add("tab");

  homeTab.innerHTML = "Home";
  homeTab.classList.add("tab");

  contactTab.innerHTML = "Contact";
  contactTab.classList.add("tab");

  header.appendChild(homeTab);
  header.appendChild(menuTab);
  header.appendChild(contactTab);
  content.appendChild(header);
}

document.addEventListener("DOMContentLoaded", build);
