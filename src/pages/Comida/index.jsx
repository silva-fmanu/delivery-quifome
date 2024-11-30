import React from "react";
import Cabecalho from "../../components/cabecalho";
import "./comida.css";
import HomeFosco from '../../assets/Homefosco.png';
import profileFosco from '../../assets/profileFosco.png';
import {Link} from "react-router-dom";
import Hamburger from '../../assets/hamburger.jpg';
import Star from '../../assets/StarFill.png';

function Comida(){

    /*const [comida, setComida] = useState();

    useEffect(() => {
      getData();
    }, []);
  
    const getData = async () => {
      try {
        let foods = await api.get("/foods");
        foods = foods.data;

        foods.forEach((item) => {
            
        })
      } catch (err) {
        console.log(err);
      }
    };*/

    return(
        <div className="body-all">
            <Cabecalho/>
            <div className="body-comida">
                <div className="card card-comida" style={{ width: '18rem' }}>
                    <img src={Hamburger} className="card-img-top imgComida" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">Hamburger</h5>
                        <p className="card-text">Tempo de preparo: 30-40min</p>
                        <p className="card-text">Preço: $9,99</p>
                        <div className="rating">
                            <img src={Star} alt="" className="starImg"/>
                            <p className="card-text">4,5</p>
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