import React, { Component } from 'react';
import '../../firebaseConfig';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            senha: ''
        }

        this.db = getFirestore();
        this.auth = getAuth();
        this.acessar = this.acessar.bind(this);
    }

    acessar() {
        const { email, senha } = this.state;

    signInWithEmailAndPassword(this.auth, email, senha)
    .then(() => {
        window.location.href = "./principal";
    })
    .catch((erro) => {
        alert(erro);
    })
    }

    render() {
        const { email, senha } = this.state;
        return (
            <div>
                <h1>Página de login</h1>

                <input type="email" placeholder="E-mail" value={email} onChange={(e) => this.setState({email: e.target.value})} />

                <input type="password" placeholder="Senha" value={senha} onChange={(e) => this.setState({senha: e.target.value}) }/>

                <button onClick={this.acessar}>Acessar</button>
            </div>
        )
    }
}