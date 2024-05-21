import phoneIcon from '../assets/icons/phone.svg';
import homeIcon from '../assets/icons/home.svg';
import kameIsland from '../assets/images/kamehouse.jpg'

export default function () {
    document.querySelector("#contact").classList.add("active");
    const content = document.querySelector("#content");
    content.className = "contact";

    content.innerHTML = `
        <div class="contact-container">
            <div class="info">
                <img src='${phoneIcon}' alt='phone-icon' />
                <p>66 77 1508</p>
            </div>
            <div class="info">
                <img src='${homeIcon}' alt='home-icon' />
                <p>Kame Island</p>
            </div>
            <div class="map">
                <img src='${kameIsland}' alt='kame-house-image' />
            </div>
        </div>
    `;
}