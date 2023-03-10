//Este es el JS principal de la app

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        data.forEach((user) => {
            this.shadowRoot.innerHTML +=  `
            <gmail-bar img=${user.img}></gmail-bar>
            <gmail-menu icon=${user.icon} name=${user.name} number=${user.number}></gmail-menu>
            `
        }
        )
    }
}

customElements.define("app-container", AppContainer);