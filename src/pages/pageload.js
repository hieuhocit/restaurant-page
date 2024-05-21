import '../styles/main-layout.css';
import home from './home';

export default function () {
    const content = document.querySelector('#content');
    content.innerHTML = "";
    content.style = "";
    home();
}