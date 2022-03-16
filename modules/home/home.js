import './home.css';

export default function buildHome() {
  const home = document.createElement("div");

  home.classList.add("home");

  home.innerHTML = `
    <h1>Welcome to the home page</h1>
  `;
  return home
}