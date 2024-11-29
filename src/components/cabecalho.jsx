import React from "react";
import "./components.css";
import Logo from '../assets/logoRed.png';

function Cabecalho(){
    return(
        <div>
            <div className="top">
                <img className="logoImage" src={Logo} alt="logo QuiFome delivery"/>
            </div>
        </div>
    );
}

export default Cabecalho;