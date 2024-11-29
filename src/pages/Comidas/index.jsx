import React from "react";
import Cabecalho from "../../components/cabecalho";
import "./comidas.css";
import HomeFosco from '../../assets/Homefosco.png';
import profileFosco from '../../assets/profileFosco.png';
import {Link} from "react-router-dom";

function Comidas(){
    return(
        <div className="body-comidas">
            <Cabecalho/>
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

export default Comidas;