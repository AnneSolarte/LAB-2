/*export const renderGmailLeftMenu = ({
    icon,
    name
}) => {
    const figure = document.createElement("figure");
    figure.classList.add("gmailLeftMenu");


    const img = document.createElement("img");
    img.classList.add("imgGmailLeftMenu")
    const p = document.createElement("p");
    p.classList.add("nameGmailLeftMenu")

    img.src = icon;
    p.textContent = name;

    figure.appendChild(img);
    figure.appendChild(p);

    return figure;
};*/
////////////////////////////////////////////////////////////////////////////////////////////////
class GmailLeftMenu extends HTMLElement {
    static get observedAttributes() {
        return ["icon", "name"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="./src/index.css">
    <section class="gmailLeftMenu">
        <img src="${this.icon}" class="imgGmailLeftMenu">
        <p class="nameGmailLeftMenu">${this.name}</p>
    </section>
    `;
    }
}

customElements.define("gmail-left-menu", GmailLeftMenu);
export default GmailLeftMenu;
