class MainApp extends HTMLElement {
    static get observedAttributes() {
        return ["sender", "subject", "body", "date"];
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
    <section class="mainApp">
        <div class="leftDiv">
            <img src="/public/src/img/check_box.png" class="mailImg">
            <img src="/public/src/img/star_line.png"" class="mailImg">
            <img src="/public/src/img/send_line.png" class="mailImg">
            <p class="senderMainApp">${this.sender}</p>
        </div>
        <div class="midDiv">
            <p class="subjectMainApp">${this.subject}</p>
            <p class="bodyMainApp">${this.body}</p>
        </div>
        <div class="rightDiv">
            <p class="dateMainApp">${this.date}</p>
        </div>
    </section>
    `;
    }
}

customElements.define("main-app", MainApp);
export default MainApp;