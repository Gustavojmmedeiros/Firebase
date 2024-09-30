import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../firebaseConfig';
import { getFirestore, collection, setDoc, doc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';


export default class Cadastro extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            senha: '',
            nome: '',
            sobrenome: '',
            nascimento: ''
        }

        this.db = getFirestore();
        this.auth = getAuth();
        this.cadastrar = this.cadastrar.bind(this);
    }


    cadastrar = async () => {
        const { email, senha, nome, sobrenome, nascimento } = this.state;
        try {
          createUserWithEmailAndPassword(this.auth, email, senha)
          .then(async (retorno) => {
            const dados = await setDoc(doc(collection(this.db, "segunda"), retorno.user.uid), {
                email: email,
                senha: senha,
                nome: nome,
                sobrenome: sobrenome,
                nascimento: nascimento
              });
            });
          alert("Cadastro realizado");
    
        } catch (erro) {
            alert("Erro: " + erro);
        }
      }

    render() {
        const { email, senha, nome, sobrenome, nascimento } = this.state;

        return (
            <>
                <div className="div-principal">
                  <h1>Cadastro</h1>
                  <div className="campos-cadastro">
                    <div>
                      <label>E-mail</label>
                      <input type="email" placeholder="E-mail" value={email} onChange={(e) => this.setState({email: e.target.value})} />
                      </div>
                    <div>
                      <label>Senha</label>
                      <input type="password" placeholder="Senha" value={senha} onChange={(e) => this.setState({senha: e.target.value})} />
                      </div>
                    <div>
                      <label>Nome</label>
                      <input type="name" placeholder="Nome" value={nome} onChange={(e) => this.setState({nome: e.target.value})} />
                      </div>
                    <div>
                      <label>Sobrenome</label>
                      <input type="name" placeholder="Sobrenome" value={sobrenome} onChange={(e) => this.setState({sobrenome: e.target.value})} />
                      </div>
                    <div>
                      <label>Data de Nascimento</label>
                      <input type="date" value={nascimento} onChange={(e) => this.setState({nascimento: e.target.value})} />
                      </div>
                    <button onClick={this.cadastrar}>Cadastrar no Firebase</button>
                  </div>
                  <p>Já possui conta? Faça <Link className="login-cadastro" to="/login">login</Link> aqui</p>
                  <Link to="/"><button className="botao-home">Retornar para Home</button></Link>
                </div>
            </>
        )
    }
}