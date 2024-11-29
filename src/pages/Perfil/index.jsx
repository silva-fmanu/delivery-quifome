import React from "react";
import Cabecalho from "../../components/cabecalho";
import "./perfil.css";
import HomeFosco from '../../assets/HomeFosco.png';
import iconeProfile from '../../assets/iconeProfile.png';
import {Link} from "react-router-dom";
import StarFill from '../../assets/StarFill.png';

function Perfil(){
    return(
        <div className="body-perfil">
            <Cabecalho/>
            <div className="bem-vindo">
                <h1 className="nomeUser">Olá, Gabriela Souza</h1>
                <p className="saldo">Seu saldo atual:</p>
                <h3 className="saldoUser">$9.99</h3>
                <button className="credito">
                    Colocar mais crédito
                </button>
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
                        <img src={iconeProfile} alt="Ícone de perfil" />
                    </Link>
                </li>
            </ul>
            </div>
        </div>
    );
}

export default Perfil