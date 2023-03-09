//Este es el directorio de componentes
import { renderGmailMenu } from "./menu/gmailMenu.js";
import gmailMenuInfo from "./menu/gmailMenuInfo.js";
import { renderGmailBar } from "./bar/gmailBar.js";
import gmailBarInfo from "./bar/gmailBarInfo.js";
import { renderGmailLeftMenu } from "./leftMenu/gmailLeftMenu.js";
import gmailLeftMenuInfo from "./leftMenu/gmailLeftMenuInfo.js";
import { renderMainApp } from "./mainApp/mainApp.js";
import mainAppInfo from "./mainApp/mainAppInfo.js";

const containerLM = document.getElementById("leftMenuDiv");
gmailLeftMenuInfo.forEach((info) =>
    containerLM.appendChild(renderGmailLeftMenu(info))
)

const containerMA = document.getElementById("mail");
mainAppInfo.forEach((info) =>
    containerMA.appendChild(renderMainApp(info))
);

const container = document.getElementById("gmailMenu");
gmailMenuInfo.forEach((info) =>
    container.appendChild(renderGmailMenu(info))
);

const containers = document.getElementById("topMenu");
gmailBarInfo.forEach((data) =>
    containers.appendChild(renderGmailBar(data))
);
