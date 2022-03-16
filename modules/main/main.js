import "./main.css";
import buildHome from "../home/home";
import buildMenu from "../menu/menu";
import buildContact from "../contact/contact";

export default function buildMain(main, tab) {
  main.innerHTML = "";

  switch (tab) { 
    case "home":
      main.appendChild(buildHome());
      break;
    
    case "menu":
      main.appendChild(buildMenu());
      break;
    
    case "contact":
      main.appendChild(buildContact());
      break;
    
    default:
      break;
  }

}