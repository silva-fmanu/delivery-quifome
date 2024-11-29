import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";


function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/delivery-quifome" element={<Login/>}/>
                <Route path="/delivery-quifome/home" element={<Home/>}/>
                <Route path="/delivery-quifome/perfil" element={<Perfil/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;