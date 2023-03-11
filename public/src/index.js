//Este es el JS principal de la app

import * as modules from "./components/index.js";
import gmailMenuInfo from "./components/menu/gmailMenuInfo.js";
import gmailBarInfo from "./components/bar/gmailBarInfo.js";
import gmailLeftMenuInfo from "./components/leftMenu/gmailLeftMenuInfo.js";
import mainAppInfo from "./components/mainApp/mainAppInfo.js";


class AppContainter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    attributeChangedCallback(propname, oldvalue, newvalue) {
        this[propname] = newvalue;
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <div id="leftMenuDiv"></div>
                <img src="/public/src/img/menu.png" id="menuImg" class="imgGmailLeftMenu">
            </div>
        `;
        const leftMenu = this.ownerDocument.createElement("section")
        leftMenu.className = "leftMenu"
        gmailLeftMenuInfo.forEach((info) =>{ `
            <gmail-left-menu icon="${info.icon}" name="${info.name}></gmail-left-menu>
            `
        const leftMenuCard = this.ownerDocument.createElement("gmail-left-menu")
        leftMenuCard.setAttribute("icon", info.icon)
        leftMenuCard.setAttribute("name", info.name)
        leftMenu.appendChild(leftMenuCard)
        })
        this.shadowRoot.appendChild(leftMenu)

        this.shadowRoot.innerHTML = `
            <div class="barInit">
                <img id="menuIcon" src="/public/src/img/menu.png" alt="">
                <img id="menuIconGmaifa-pull-left" src="/public/src/img/name.png" alt="">
            </div>
            <div>
                <button id="buttonCompose"><img id="imgButCompose" src="./src/img/pencil.png" alt="">Compose</button>
            </div>
        `;
        const menu = this.ownerDocument.createElement("section")
        menu.className = "menu"
        gmailMenuInfo.forEach((info) =>{ `
            <gmail-menu icon="${info.icon}" name="${info.name} number="${info.number}></gmail-menu>
            `
        const menuCard = this.ownerDocument.createElement("gmenu-menu")
        menuCard.setAttribute("icon", info.icon)
        menuCard.setAttribute("name", info.name)
        menuCard.setAttribute("number", info.number)
        menu.appendChild(menuCard)
        })
        this.shadowRoot.appendChild(menu)




        this.shadowRoot.innerHTML = `
            <<div class="input">
                <img class="imgInput" src="./src/img/search.png">
                <input id="input" placeholder="Buscar correo" type="text">
                <img class="imgInput" src="./src/img/filter.png">
            </div>
        `;
        const topMenu = this.ownerDocument.createElement("section")
        topMenu.className = "topMenu"
        gmailBarInfo.forEach((info) =>{ `
            <gmail-bar img="${info.img}"></gmail-bar>
            `
        const topMenuCard = this.ownerDocument.createElement("gmail-menu")
        topMenuCard.setAttribute("img", info.img)
        topMenu.appendChild(topMenuCard)
        })
        this.shadowRoot.appendChild(topMenu)


        this.shadowRoot.innerHTML = `
        <div class="upperMenu">
            <img src="./src/img/check_box.png" class="mainAppImg">
            <img src="./src/img/arrow_drop_down.png" class="mainAppImg">
            <img src="./src/img/refresh.png" class="mainAppImg" id="refresh">
            <img src="./src/img/more_vert.png" class="mainAppImg">
        </div>
        `;
        const mail = this.ownerDocument.createElement("section")
        mail.className = "mail"
        gmailMenuInfo.forEach((info) =>{ `
            <mail sender="${info.sender}" subject="${info.subject} body="${info.body} date="${info.date}></gmail-left-menu>
            `
        const mailCard = this.ownerDocument.createElement("mail")
        mailCard.setAttribute("sender", info.sender)
        mailCard.setAttribute("subject", info.subject)
        mailCard.setAttribute("body", info.body)
        mailCard.setAttribute("date", info.date)
        mail.appendChild(mailCard)
        })
        this.shadowRoot.appendChild(mail)


    }



}

customElements.define("app-container", AppContainter);
