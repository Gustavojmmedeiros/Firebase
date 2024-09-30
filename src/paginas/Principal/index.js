import React, { Component } from 'react';
import '../../firebaseConfig';
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default class Cadastro extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            sobrenome: '', 
            nascimento: ''
        }

        this.db = getFirestore();
        this.auth = getAuth();
    }

    async componentDidMount() {
        try {
            onAuthStateChanged(this.auth, async (usuario) => {
                if (usuario) {
                    var uid = usuario.uid;
                    
                    var dados = await getDoc(doc(this.db, "segunda", uid))
                    .then((retorno) => {
                        this.setState({
                            nome: retorno.data().nome,
                            sobrenome: retorno.data().sobrenome,
                            nascimento: retorno.data().nascimento
                        });
                    });
                }
            });
        } catch (erro) {
            alert("Erro: " + erro);
        }
    }


    render() {
        return (
            <div>
                <h1>Página Principal</h1>

                <p className="p-principal">Nome: {this.state.nome}</p>
                <p className="p-principal">Sobrenome: {this.state.sobrenome}</p>
                <p className="p-principal">Data de nascimento: {this.state.nascimento}</p>
            </div>
        )
    }
}