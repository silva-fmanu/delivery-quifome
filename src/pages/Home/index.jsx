import React from 'react';
import './home.css';
import iconeHome from '../../assets/iconeHome.png';
import profileFosco from '../../assets/profileFosco.png';
import banner from '../../assets/banner.png';  
import Hamburger from '../../assets/Hamburger.jpg'; 
import StarFill from '../../assets/StarFill.png';
import Cabecalho from '../../components/cabecalho';
import restauranteLogo from '../../assets/restauranteLogo.png'; 
import Perfil from '../Perfil';
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="body-home">
            <Cabecalho/>
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
                        <h4 className='nome'>Hamburger</h4>
                        <h5 className='tempo'>30-40min</h5>
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
                <div className="restaurantCard">
                    <img src={restauranteLogo} alt="Hamburger" className='restaurantCardImg'/>
                    <div className="restaurantRating">
                        <img src={StarFill} alt="" className='star'/>
                        <p className='ratingValue'>4,5</p>
                    </div>
                </div>
            </div>
            <div className="tabs">
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/delivery-quifome/home">
                        <img src={iconeHome} alt="Ícone home" />
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/delivery-quifome/perfil">
                        <img src={profileFosco} alt="Ícone de perfil" />
                    </Link>
                </li>
            </ul>
            </div>
        </div>
    );
}

export default Home;
