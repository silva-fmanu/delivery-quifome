import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Comidas from "./pages/Comidas";
import Comida from "./pages/Comida";
import Restaurantes from "./pages/Restaurantes";
import Restaurante from "./pages/Restaurante";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/delivery-quifome" element={<Login/>}/>
                <Route path="/delivery-quifome/home" element={<Home/>}/>
                <Route path="/delivery-quifome/perfil" element={<Perfil/>}/>
                <Route path="/delivery-quifome/comidas" element={<Comidas/>}/>
                <Route path="/delivery-quifome/comida/:ComidaId" element={<Comida/>}/>
                <Route path="/delivery-quifome/restaurantes" element={<Restaurantes/>}/>
                <Route path="/delivery-quifome/restaurante/:RestauranteId" element={<Restaurante/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;