import React from "react";
import Cabecalho from "../../components/cabecalho";
import "./comida.css";
import HomeFosco from '../../assets/Homefosco.png';
import profileFosco from '../../assets/profileFosco.png';
import {Link} from "react-router-dom";

function Comida(){

    const [comida, setComida] = useState();

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
    };

    return(
        <div className="body-comida">
            <Cabecalho/>

            

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