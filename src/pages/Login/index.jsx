import Logo from "../../assets/logo.png";
import "./login.css";

function Login() {
  return (
    <div>
      <div>
        <img src={Logo} alt="" />
        <form>
          <div class="form-group">
            <label className="amarelo">Email:</label>
            <input
              type="email"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label className="amarelo">Password</label>
            <input
              type="password"
              class="form-control"
              placeholder="Password"
            />
          </div>
          <button type="submit" class="btn botao-login mt-5">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
