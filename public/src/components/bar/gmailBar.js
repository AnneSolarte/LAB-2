export const renderGmailBar = ({
    icon,
}) => {
    const figure = document.createElement("figure");
    figure.classList.add("gmailBar");


    const img = document.createElement("img");
    img.classList.add("imgGmailBar")

    img.src = icon;


    figure.appendChild(img);

    return figure;
};