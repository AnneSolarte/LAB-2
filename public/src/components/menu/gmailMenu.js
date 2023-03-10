
class gmailMenu extends HTMLElement{
    static get observedAttributes(){
        return ["icon", "name", "number"];
    }
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }
    connectedCallback(){
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.render();
    }
    render(){
        this.shadowRoot.innerHTML =  `
        <link rel="stylesheet" href="./src/components/profile/profile.css">
        <div class="gmailMenu">
            <img class="imgGmailMenu" src="${this.icon} ">
            <h3 class="nameGmailMenu">${this.name}</h3>
            <p class="numGmailMenu">${this.number}</p>
        </div>
        `
    }
}
customElements.define("gmail-menu", gmailMenu);
export default gmailMenu;

