import React, { useEffect, useState } from "react";
import "./home.css";
import iconeHome from "../../assets/iconeHome.png";
import profileFosco from "../../assets/profileFosco.png";
import banner from "../../assets/banner.png";
import Hamburger from "../../assets/Hamburger.jpg";
import StarFill from "../../assets/StarFill.png";
import Cabecalho from "../../components/cabecalho";
import restauranteLogo from "../../assets/restauranteLogo.png";
import Perfil from "../Perfil";
import { Link } from "react-router-dom";
import api from "../../services/api";

function Home() {
  const [comidas, setComidas] = useState([]);
  const [restaurantes, setRestaurantes] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const foods = await api.get("/foods");
      setComidas(foods.data);

      const restaurants = await api.get("/restaurants");
      setRestaurantes(restaurants.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="body-home mb-5">
      <Cabecalho />
      <div className="banner">
        <img className="bannerImage" src={banner} alt="banner de promoção" />
      </div>
      <div className="foodsList">
        <div className="sectionTitle">
          <h3 className="title">Comidas Para Você</h3>
          <a href="#" className="seeMore">
            Ver mais
          </a>
        </div>
        <div className="FoodsContainer px-3 my-2">
          {comidas.map((comida) => (
            <div className="food-item">
              <img
                src={comida.image}
                className="card-img-top"
                alt={comida.name}
              />
              <div className="item-body">
                <h5 className="card-title">{comida.name}</h5>
                <p className="card-text">R${comida.price}</p>
                <p>{comida.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="restaurantsList">
        <div className="sectionTitle">
          <h3 className="title">Restaurantes</h3>
          <a href="#" className="seeMore">
            Ver mais
          </a>
        </div>
        <div className="RestaurantsContainer px-3 my-2">
          {restaurantes.map((restaurante) => (
            <div style={{width: "18rem"}}>
              <img src={restaurante.image} className="card-img-top" alt={restaurante.name} />
              <div className="card-body">
                <p className="card-text">{restaurante.name}</p>
              </div>
            </div>
          ))}
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
