import items from '../data/items.json5';

export default function () {
    document.querySelector("#menu").classList.add("active");
    const content = document.querySelector("#content");
    content.className = "menu";
    content.innerHTML = "";

    const container = document.createElement("div");
    container.className = "item-container";

    items.forEach(element => {
        const item = document.createElement("div");
        const image = document.createElement("img");
        const imageContainer = document.createElement("div");
        const title = document.createElement("p");
        const description = document.createElement("p");
        
        item.className = "item";
        imageContainer.className = "image";
        title.className = "title";
        description.className = "description";

        image.src = require("../assets/images/" + element.imageUrl);
        title.textContent = element.title;
        description.textContent = element.description;

        imageContainer.appendChild(image);

        item.appendChild(imageContainer);
        item.appendChild(title);
        item.appendChild(description);
        container.appendChild(item);
    });
    content.appendChild(container);
}