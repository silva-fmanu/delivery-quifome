import React, { useEffect, useState } from "react";
import Cabecalho from "../../components/cabecalho";
import "./restaurante.css";
import HomeFosco from "../../assets/Homefosco.png";
import profileFosco from "../../assets/profileFosco.png";
import { Link, useParams } from "react-router-dom";
import Star from "../../assets/StarFill.png";
import api from "../../services/api";

function Restaurante() {
  const [restaurante, setRestaurante] = useState("");

  const [comidas, setComidas] = useState([]);

  const { RestauranteId } = useParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const restaurant = await api.get(`/restaurants/${RestauranteId}`);
      setRestaurante(restaurant.data);

      let foods = await api.get("/foods");
      foods = foods.data;

      const filteredFoods = foods.filter((item) => {
        item.restaurantId = restaurante.id;
      });

      setComidas((prevComidas) => [...prevComidas, ...filteredFoods]);

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="body-all">
      <Cabecalho />
      <div className="body-restaurante">
        <div className="card card-restaurante" style={{ width: "18rem" }}>
          <img
            src={restaurante.image}
            className="card-img-top imgComida"
            alt="Logo do Restaurante"
          />
          <div className="card-body">
            <h5 className="card-title">{restaurante.name}</h5>
            <p className="card-text">{restaurante.description}</p>
            <div className="rating">
              <img src={Star} alt="" className="starImg" />
              <p className="card-text">{restaurante.rating}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="comidasList">
        <h3 className="title">Comidas Para Você</h3>
        <div className="FoodsContainer px-3 my-2">
            <Link to={`/delivery-quifome/comida/6`}>
              <div className="food-item">
                <div
                  className="food-image"
                  style={{ backgroundImage: `url("https://static.ifood-static.com.br/image/upload/t_high/pratos/2fe393ff-e7dd-430a-a545-e26c132539b6/202108061400_6GC5_.jpeg")` }}
                ></div>
                <div className="item-body">
                  <h5 className="card-title">Xis Salada</h5>
                  <p className="card-text">R$23.00</p>
                  <div className="rating">
                    <img src={Star} alt="" className="starImg" />
                    <p className="card-text">4.7</p>
                  </div>
                </div>
              </div>
            </Link>
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

export default Restaurante;
