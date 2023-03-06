//Este es el directorio de componentes
import { renderGmailMenu } from "./menu/gmailMenu.js";
import gmailMenuInfo from "./menu/gmailMenuInfo.js";
import { renderGmailBar } from "./bar/gmailBar.js";
import gmailBarInfo from "./bar/gmailBarInfo.js";


const containers = document.getElementById("topMenu");

gmailBarInfo.forEach((data) =>
    containers.appendChild(renderGmailBar(data))
);
