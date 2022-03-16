import styles from "./header.css";
import buildMain from "../main/main";

export default function buildHeader(callbackFn) {
  const header = document.createElement("header");
  const homeTab = document.createElement("div");
  const menuTab = document.createElement("div");
  const contactTab = document.createElement("div");

  menuTab.innerHTML = "Menu";
  menuTab.classList.add(`${styles.tab}`);
  menuTab.onclick = () => callbackFn("menu");

  homeTab.innerHTML = "Home";
  homeTab.classList.add(`${styles.tab}`);
  homeTab.onclick = () => callbackFn("home");

  contactTab.innerHTML = "Contact";
  contactTab.classList.add(`${styles.tab}`);
  contactTab.onclick = () => callbackFn("contact");

  header.appendChild(homeTab);
  header.appendChild(menuTab);
  header.appendChild(contactTab);

  return header;
}