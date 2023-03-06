export const renderGmailMenu = ({
    icon,
    name,
    number,
}) => {
    const figure = document.createElement("figure");
    figure.classList.add("gmailMenu");


    const img = document.createElement("img");
    img.classList.add("imgGmailMenu")
    const h4 = document.createElement("h4");
    h4.classList.add("nameGmailMenu")
    const p = document.createElement("p");
    p.classList.add("numGmailMenu")

    img.src = icon;
    h4.textContent = name;
    p.textContent = number;


    figure.appendChild(img);
    figure.appendChild(h4);
    figure.appendChild(p);

    return figure;
};


