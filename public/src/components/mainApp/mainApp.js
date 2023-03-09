export const renderMainApp = ({
    sender,
    subject,
    body,
    date
}) => {
    const figure = document.createElement("figure");
    figure.classList.add("mainApp");


    const send = document.createElement("p");
    send.classList.add("senderMainApp");
    const sub = document.createElement("p");
    sub.classList.add("subjectMainApp");
    const bod = document.createElement("p");
    bod.classList.add("bodyMainApp");
    const dat = document.createElement("p");
    dat.classList.add("dateMainApp");

    send.textContent = sender;
    sub.textContent = subject;
    bod.textContent = body;
    dat.textContent = date;

    figure.appendChild(send);
    figure.appendChild(sub);
    figure.appendChild(bod);
    figure.appendChild(dat);

    return figure;
};