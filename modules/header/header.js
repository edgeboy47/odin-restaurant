import styles from "./style.css";

export default function buildHeader() {
  const header = document.createElement("header");
  const homeTab = document.createElement("div");
  const menuTab = document.createElement("div");
  const contactTab = document.createElement("div");

  menuTab.innerHTML = "Menu";
  menuTab.classList.add(`${styles.tab}`);

  homeTab.innerHTML = "Home";
  homeTab.classList.add(`${styles.tab}`);

  contactTab.innerHTML = "Contact";
  contactTab.classList.add(`${styles.tab}`);

  header.appendChild(homeTab);
  header.appendChild(menuTab);
  header.appendChild(contactTab);

  return header;
}