import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        alert("Erro: "+ erro);
    })
    }

    render() {
        const { email, senha } = this.state;
        return (
            <>
                <div className="div-principal">
                    <h1>Login</h1>
                    <div className="div-input">
                        <label>E-mail</label>
                        <input type="email" placeholder="E-mail" value={email} onChange={(e) => this.setState({email: e.target.value})} />
                    </div>
                    <div className="div-input">
                        <label>Senha</label>
                        <input type="password" placeholder="Senha" value={senha} onChange={(e) => this.setState({senha: e.target.value}) }/>
                        <button onClick={this.acessar}>Acessar</button>
                    </div>
                    <p>Não possui uma conta? <Link className="login-cadastro" to="/cadastro">Cadastre-se</Link></p>
                    <Link to="/"><button className="botao-home">Retornar para Home</button></Link>
                </div>
            </>
        )
    }
}