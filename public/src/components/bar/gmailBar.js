
class gmailBar extends HTMLElement{
    static get observedAttributes(){
        return ["img"];
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
        <div class="gmailBar">
            <img src="${this.img} ">
        </div>
        `
    }
}
customElements.define("gmail-bar", gmailBar);
export default gmailBar;