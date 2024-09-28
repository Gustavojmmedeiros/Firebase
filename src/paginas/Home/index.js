import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <Link to="/cadastro">Cadastro</Link>
                <Link to="/login">Login</Link>
            </div>
        )
    }
}