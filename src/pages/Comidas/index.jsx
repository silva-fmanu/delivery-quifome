import React, { useEffect, useState } from "react";
import Cabecalho from "../../components/cabecalho";
import "./comidas.css";
import HomeFosco from "../../assets/Homefosco.png";
import profileFosco from "../../assets/profileFosco.png";
import { Link } from "react-router-dom";
import api from "../../services/api";

function Comidas() {
  const [comidas, setComidas] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const foods = await api.get("/foods");
      setComidas(foods.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="body-comidas my-5">
      <Cabecalho />

      <div className="food-container">
        {comidas.map((comida) => (
          <div key={comida.id} className="food-item">
            <div
              className="food-image"
              style={{ backgroundImage: `url(${comida.image})` }}
            ></div>
            <div className="item-body">
              <h5 className="card-title">{comida.name}</h5>
              <p className="card-text">R${comida.price}</p>
              <p>{comida.rating}</p>
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

export default Comidas;
