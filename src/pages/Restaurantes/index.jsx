import React, { useEffect, useState } from "react";
import Cabecalho from "../../components/cabecalho";
import "./restaurantes.css";
import HomeFosco from "../../assets/Homefosco.png";
import profileFosco from "../../assets/profileFosco.png";
import { Link } from "react-router-dom";
import api from "../../services/api";

function Restaurantes() {

    const [restaurantes, setRestaurantes] = useState([]);

    useEffect(() => {
      getData();
    }, []);
  
    const getData = async () => {
      try {
        const restaurants = await api.get("/restaurants");
        setRestaurantes(restaurants.data);
      } catch (err) {
        console.log(err);
      }
    };

  return (
    <div className="body-restaurantes">
      <Cabecalho />

      <div className="restaurant-container">
        {restaurantes.map((restaurante) => (
          <div key={restaurante.id} className="food-item">
            <div
              className="food-image"
              style={{ backgroundImage: `url(${restaurante.image})` }}
            ></div>
            <div className="item-body">
              <h5 className="card-title">{restaurante.name}</h5>
              <p className="card-text">R${restaurante.price}</p>
              <p>{restaurante.rating}</p>
            </div>
          </div>
        ))}
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

export default Restaurantes;
