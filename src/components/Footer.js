import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
//import { FaGithub } from 'react-icons/fa';
import './Footer.css'

function Footer() {
    return (
        <footer class="footer mt-auto py-3 bg-body-tertiary" data-bs-theme="dark">
            <div class="container">
                <span class="text-body-secondary"> B9 GAMES criado por <a href='https://github.com/heitorbrunini'> Heitor Brunini</a> </span>
               
            </div>
        </footer>
    )
}

export default Footer;