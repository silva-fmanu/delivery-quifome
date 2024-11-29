import React from 'react';
import './home.css';
import Logo from '../../assets/logoRed.png';
import iconeHome from '../../assets/iconeHome.png';
import profileFosco from '../../assets/profileFosco.png';
import banner from '../../assets/banner.png';  
import Hamburger from '../../assets/Hamburger.jpg'; 
import StarFill from '../../assets/StarFill.png';

function Home() {
    return (
        <div className="body-home">
            <div className="top">
                <img className="logoImage" src={Logo} alt="logo QuiFome delivery"/>
            </div>
            <div className="banner">
                <img className="bannerImage" src={banner} alt="banner de promoção" />
            </div>
            <div className="foodsList">
                <div className="sectionTitle">
                    <h3 className='title'>Comidas Para Você</h3>
                    <a href="#" className="seeMore">Ver mais</a>
                </div>
                <div className="foodCard">
                    <img src={Hamburger} alt="Hamburger" className='foodCardImg'/>
                    <div className="foodInfo">
                        <h4>Hamburger</h4>
                        <h5>30-40min</h5>
                    </div>
                    <div className="foodRating">
                        <img src={StarFill} alt="" className='star'/>
                        <p className='ratingValue'>4,5</p>
                    </div>
                    <div className="price">
                        <h4>$9,99</h4>
                    </div>
                </div>
            </div>
            <div className="restaurantsList">
                <div className="sectionTitle">
                        <h3 className='title'>Restaurantes</h3>
                        <a href="#" className="seeMore">Ver mais</a>
                </div>
            </div>
            <div className="tabs">
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <img src={iconeHome} alt="Ícone home" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <img src={profileFosco} alt="Ícone de perfil" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Home;
