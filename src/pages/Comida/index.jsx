import React, { useEffect, useState } from "react";
import Cabecalho from "../../components/cabecalho";
import "./comida.css";
import HomeFosco from '../../assets/Homefosco.png';
import profileFosco from '../../assets/profileFosco.png';
import {Link, useParams} from "react-router-dom";
import Hamburger from '../../assets/hamburger.jpg';
import Star from '../../assets/StarFill.png';
import api from "../../services/api";

function Comida(){

    const [comida, setComida] = useState("");

    const { ComidaId } = useParams();

    useEffect(() => {
      getData();
    }, []);
  
    const getData = async () => {
      try {
        const food = await api.get(`/foods/${ComidaId}`);
        setComida(food.data);
      } catch (err) {
        console.log(err);
      }
    };

    return(
        <div className="body-all">
            <Cabecalho/>
            <div className="body-comida">
                <div className="card card-comida" style={{ width: '18rem' }}>
                    <img src={comida.image} className="card-img-top imgComida" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{comida.name}</h5>
                        <p className="card-text">Tempo de preparo: {comida.time}</p>
                        <p className="card-text">Preço: R${comida.price}</p>
                        <div className="rating">
                            <img src={Star} alt="" className="starImg"/>
                            <p className="card-text">{comida.rating}</p>
                        </div>
                        <a href="#" className="btn btn-primary btnComprar">Comprar</a>
                    </div>
                </div>    
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

export default Comida;