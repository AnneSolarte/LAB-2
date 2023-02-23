//Este es el directorio de componentes
import { renderGmailMenu } from "./gmailMenu.js";
import gmailMenuInfo from "./gmailMenuInfo.js";

const container = document.getElementById("gmailMenu");

gmailMenuInfo.forEach((info) =>
    container.appendChild(renderGmailMenu(info))
);