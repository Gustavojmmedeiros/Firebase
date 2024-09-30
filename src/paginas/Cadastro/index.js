import React, { Component } from 'react';
import '../../firebaseConfig';
import { getFirestore, collection, addDoc, setDoc, doc } from 'firebase/firestore';


export default class Cadastro extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            senha: '',
            nome: '',
            sobrenome: '',
            data: ''
        }

        this.db = getFirestore();
        // this.auth = getAuth();
    }


    gravar = async () => {
        const { email, senha, nome, sobrenome, data } = this.state;
    
        try {
          const dados = await addDoc(collection(this.db, "teste"), {
            email: email,
            senha: senha,
            nome: nome,
            sobrenome: sobrenome,
            data: data
        });
          this.setState({ email: '', senha: '',  nome: '', sobrenome:'', data: '' });
          alert("Usuário salvo no database.")
          
        } catch (error) {
            console.log(error)
            alert("Falha ao salvar dados");
        }
    }


    render() {
        const { email, senha, nome, sobrenome, data } = this.state;

        return (
            <div>
                <h1>Página de cadastro</h1>
                <input type="email" placeholder="E-mail" value={email} onChange={(e) => this.setState({email: e.target.value})} />

                <input type="password" placeholder="Senha" value={senha} onChange={(e) => this.setState({senha: e.target.value})} />

                <input type="name" placeholder="Nome" value={nome} onChange={(e) => this.setState({nome: e.target.value})} />

                <input type="name" placeholder="Sobrenome" value={sobrenome} onChange={(e) => this.setState({sobrenome: e.target.value})} />

                <input type="date" placeholder="Data" value={data} onChange={(e) => this.setState({data: e.target.value})} />

                <button onClick={this.gravar}>Cadastrar no Firebase</button>
            </div>
        )
    }
}