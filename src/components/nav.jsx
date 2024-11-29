import React from "react";
import "./components.css"

function Nav(){
    return(
        <div>
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

export default Nav;