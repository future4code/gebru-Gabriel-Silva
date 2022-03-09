
import React from "react"
import axios from "axios"

class TelaUsuario extends React.Component {
  state = {

    nome:"",
    email:""
  }
  createUser = () => {
    const url =
      'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

    const body = {
      name: this.state.nome,
      email: this.state.email
    }

    axios
       .post(url, body, {
       headers: {
          Authorization: 'gabriel-luiz-gebru'
         }
       })
       .then(res => {
        this.setState({ nome: '', email: '' })
       })
      .catch(err => alert(err.response.data.message))
  }

    
  
 
  onChangeInputNome = (event) => {
    console.log(this.state.nome)
    this.setState({nome: event.target.value})
   
  }
  onChangeInputEmail = (event) => {
    this.setState({email: event.target.value})
    console.log(this.state.email)
  }



    render(){
     
    return (
      <div>
         <div className="troca">
         <input placeholder="Nome"  onChange={this.onChangeInputNome} value = {this.state.nome} /> 
         <input placeholder="E-mail"  onChange={this.onChangeInputEmail} value = {this.state.email}/>
          <button  onClick={this.createUser}>Criar Usuário</button>
         </div>
        
      </div>
  
      
    );
  }}
  
  export default TelaUsuario;
  