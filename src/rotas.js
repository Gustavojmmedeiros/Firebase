import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import Cadastro from './paginas/Cadastro';
import Login from './paginas/Login';


const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;