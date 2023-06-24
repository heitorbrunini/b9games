import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import gameImage from '../assets/game1.jpeg';
import gameImage2 from '../assets/God4.jpg';
import gameImage3 from '../assets/game3.jpg';
import "./Carousel.css";

function Carousel() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={gameImage} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Os Melhores jogos atuais</h2>
                            <p>você só encontra aqui!</p>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={gameImage2} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Lançamentos mais Aguardados.</h2>
                            <p>tenha acesso de forma exclusiva!</p>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={gameImage3} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Multiplayer Desafiador</h2>
                            <p>Leve suas habilidades ao extremo!</p>
                        </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carousel;