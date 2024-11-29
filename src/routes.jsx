import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";


function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/delivery-quifome" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;