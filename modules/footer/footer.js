import "./style.css";

export default function buildFooter() {
  const footer = document.createElement("footer");
  const credit = document.createElement("div");
  credit.classList.add("credit");
  credit.innerHTML = "edgeboy47";

  footer.appendChild(credit);
  return footer;
}