export const renderMainApp = ({
    sender,
    subject,
    body,
    date
}) => {
    const figure = document.createElement("figure");
    figure.classList.add("mainApp");
    const leftDiv = document.createElement("div")
    leftDiv.classList.add("leftDiv");
    const midDiv = document.createElement("div")
    midDiv.classList.add("midDiv");
    const rightDiv = document.createElement("div")
    rightDiv.classList.add("rightDiv");

    const checkbox = document.createElement("img");
    checkbox.classList.add("mailImg");
    const star = document.createElement("img")
    star.classList.add("mailImg");
    const mark = document.createElement("img");
    mark.classList.add("mailImg");
    const send = document.createElement("p");
    send.classList.add("senderMainApp");
    const sub = document.createElement("p");
    sub.classList.add("subjectMainApp");
    const bod = document.createElement("p");
    bod.classList.add("bodyMainApp");
    const dat = document.createElement("p");
    dat.classList.add("dateMainApp");

    checkbox.src = "/public/src/img/check_box.png"
    star.src = "/public/src/img/star_line.png"
    mark.src = "/public/src/img/send_line.png"
    send.textContent = sender;
    sub.textContent = subject;
    bod.textContent = body;
    dat.textContent = date;

    leftDiv.appendChild(checkbox);
    leftDiv.appendChild(star);
    leftDiv.appendChild(mark);
    leftDiv.appendChild(send);
    midDiv.appendChild(sub);
    midDiv.appendChild(bod);
    rightDiv.appendChild(dat);
    figure.appendChild(leftDiv);
    figure.appendChild(midDiv);
    figure.appendChild(rightDiv);

    return figure;
};

customElements.define("mail", GmailLeftMenu);
export default GmailLeftMenu;