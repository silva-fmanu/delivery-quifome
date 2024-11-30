import React, { useEffect, useState } from "react";
import Cabecalho from "../../components/cabecalho";
import "./perfil.css";
import HomeFosco from '../../assets/HomeFosco.png';
import iconeProfile from '../../assets/iconeProfile.png';
import {Link} from "react-router-dom";

function Perfil(){

    const [user, setUser] = useState("");

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        let usuario = sessionStorage.getItem("sessao");
        usuario = JSON.parse(usuario);
        setUser(usuario);
    }

    return(
        <div className="body-perfil">
            <Cabecalho/>
            <div className="bem-vindo">
                <h1 className="nomeUser">Olá, {user.name}</h1>
                <p className="saldo">Seu saldo atual:</p>
                <h3 className="saldoUser">${user.saldo}</h3>
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