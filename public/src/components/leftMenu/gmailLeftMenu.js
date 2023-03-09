export const renderGmailLeftMenu = ({
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
};