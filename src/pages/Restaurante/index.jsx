import React from "react";
import Cabecalho from "../../components/cabecalho";
import "./restaurante.css";
import HomeFosco from '../../assets/Homefosco.png';
import profileFosco from '../../assets/profileFosco.png';
import {Link} from "react-router-dom";
import restauranteLogo from '../../assets/restauranteLogo.png';
import Star from '../../assets/StarFill.png';

function Restaurante(){
    return(
        <div className="body-all">
            <Cabecalho/>
            <div className="body-restaurante">
                <div className="card card-restaurante" style={{ width: '18rem' }}>
                    <img src={restauranteLogo} className="card-img-top imgComida" alt="Logo do Restaurante" />
                    <div className="card-body">
                        <h5 className="card-title">Xis do Vini</h5>
                        <p className="card-text">Descricao</p>
                        <div className="rating">
                                <img src={Star} alt="" className="starImg"/>
                                <p className="card-text">4,5</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="comidasList">
            <h3 className="title">Comidas Para Você</h3>
            <p>card de lista de comida</p>
            </div>
            <div className="tabs">
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/delivery-quifome/home">
                            <img src={HomeFosco} alt="Ícone home" />
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

export default Restaurante;
