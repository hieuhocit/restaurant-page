import pageload from './pages/pageload';

// Styles
import './styles/home.css';
import './styles/menu.css';
import './styles/contact.css';

// Components
import home from './pages/home';
import contact from './pages/contact';
import menu from './pages/menu';

pageload();

const nav = document.querySelector('.nav');
nav.addEventListener("click", switchTab);

function switchTab(e) {
    switch (e.target.id) {
        case "menu":
            removeCurrentTabActive();
            menu();
            break;
        case "contact":
            removeCurrentTabActive();
            contact();
            break;
        default:
            removeCurrentTabActive();
            home();
            break;
    }
}

function removeCurrentTabActive() {
    nav.querySelector('.btn.active')?.classList.remove('active');
}