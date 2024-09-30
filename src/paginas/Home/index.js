import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../estilos/estilos.css';


export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="div-input">
                    <h1>Home</h1>
                    <Link to="/cadastro"><button className="botao-cadastro">Cadastro</button></Link>
                    <Link to="/login"><button className="botao-cadastro">Login</button></Link>
                </div>
            </>
        )
    }
}