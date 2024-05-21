import imageIntroduction from '../assets/images/introduction.jpg';

export default function () {
    document.querySelector("#home").classList.add("active");
    const content = document.querySelector("#content");
    content.className = "home";

    content.innerHTML = `
    <h1 class='title'>Welcome to Son Goku Model Shop, your one-stop destination for the finest Dragon Ball collectibles!</h1>
    <img src="${imageIntroduction}" alt="image-introduction">
    <p class='description'>As passionate Dragon Ball fans ourselves, we understand the excitement and joy of collecting these iconic figures. That's why we've curated a vast selection of Son Goku models, from classic renditions to the latest releases, ensuring you find the perfect addition to your collection.</p>
    `;
}