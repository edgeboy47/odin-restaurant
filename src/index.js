import styles from './style.css';
import buildFooter from '../modules/footer/footer';
import buildHeader from '../modules/header/header';
import buildMain from '../modules/main/main';

function build() {
  const body = document.querySelector('body');
  const main = document.createElement('main');
  
  const content = document.createElement("div");
  content.classList.add(`${styles.content}`);

  content.appendChild(buildHeader((tab) => buildMain(main, tab)));
  content.appendChild(main);
  buildMain(main, "home")
  content.appendChild(buildFooter());
  body.appendChild(content)
}

document.addEventListener("DOMContentLoaded", build);
