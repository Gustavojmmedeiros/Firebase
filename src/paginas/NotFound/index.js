import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="div-principal">
                    <Link to="/"><button className="botao-cadastro">Home</button></Link>
                    <h1>404 - Página não encontrada</h1>
                </div>
            </>
        )
    }
}