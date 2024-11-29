import { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import "./login.css";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);
  const [mensagem, setMensagem] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if(sessionStorage.getItem("sessao")){
      navigate("/delivery-quifome/home")
    }
  }, [])

  const Login = async (e) => {
    e.preventDefault();

    try{

      let usuarios = await api.get("/users");
      usuarios = usuarios.data;

      usuarios.forEach((item) => {
        if(item.email === email){

          if(item.senha === senha){

            sessionStorage.setItem("sessao", JSON.stringify(item));
            navigate("/delivery-quifome/home");

          }
        }else{

          setMensagem("Email ou senha incorretos!")

        }
      })
    } catch(err) {
      console.log(err);
    }
  }


  return (
    <div>
      <div>
        <img src={Logo} alt="" />
        <form onSubmit={Login}>
          <div className="form-group">
            <label className="amarelo">Email:</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="amarelo">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <button type="submit" className="btn botao-login mt-5">
            Login
          </button>
        </form>
        <p>{mensagem}</p>
      </div>
    </div>
  );
}

export default Login;
