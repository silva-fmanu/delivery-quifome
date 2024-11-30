import React, { useEffect, useState } from "react";
import "./home.css";
import iconeHome from "../../assets/iconeHome.png";
import profileFosco from "../../assets/profileFosco.png";
import banner from "../../assets/banner.png";
import Cabecalho from "../../components/cabecalho";
import { Link } from "react-router-dom";
import api from "../../services/api";
import Star from "../../assets/StarFill.png";

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
    <div className="body-home">
      <Cabecalho />
      <div className="banner">
        <img className="bannerImage" src={banner} alt="banner de promoção" />
      </div>
      <div className="foodsList">
        <div className="sectionTitle">
          <h3 className="title">Comidas Para Você</h3>
          <Link className="seeMore" to="/delivery-quifome/comidas">
            Ver mais
          </Link>
        </div>
        <div className="FoodsContainer px-3 my-2">
          {comidas.map((comida) => (
            <Link to={`/delivery-quifome/comida/${comida.id}`}>
              <div key={comida.id} className="food-item">
                <div
                  className="food-image"
                  style={{ backgroundImage: `url(${comida.image})` }}
                ></div>
                <div className="item-body">
                  <h5 className="card-title">{comida.name}</h5>
                  <p className="card-text">R${comida.price}</p>
                  <div className="rating">
                    <img src={Star} alt="" className="starImg" />
                    <p className="card-text">{comida.rating}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="restaurantsList">
        <div className="sectionTitle">
          <h3 className="title">Restaurantes</h3>
          <Link className="seeMore" to="/delivery-quifome/restaurantes">
            Ver mais
          </Link>
        </div>
        <div className="RestaurantsContainer px-3 my-2">
          {restaurantes.map((restaurante) => (
            <Link to={`/delivery-quifome/restaurante/${restaurante.id}`}>
              <div key={restaurante.id} className="food-item">
                <div
                  className="food-image"
                  style={{ backgroundImage: `url(${restaurante.image})` }}
                ></div>
                <div className="item-body">
                  <h5 className="card-title">{restaurante.name}</h5>
                  <div className="rating">
                    <img src={Star} alt="" className="starImg" />
                    <p className="card-text">{restaurante.rating}</p>
                  </div>
                </div>
              </div>
            </Link>
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
