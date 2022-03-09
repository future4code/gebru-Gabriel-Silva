import React from "react"
import axios from "axios"


class CadastroUsuario extends React.Component {
  
  state = {
    usersList: []
  }

  componentDidMount() {
    this.getAllUsers()
  }

  getAllUsers = () => {
    

     axios
       .get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
         headers: {
           Authorization: 'gabriel-luiz-gebru'
         }
       })
       .then(res => {
         this.setState({ usersList: res.data })
       })
       .catch(err => console.log(err.response))
  }

  deleteUser = (userId) => {
    

     axios
       .delete(
         `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`, {
        headers: {
          Authorization: 'gabriel-luiz-gebru'
         }
       })
      .then(res => {
         alert('Usuárie deletade com sucesso!')
         this.getAllUsers()
       })
       .catch(err => console.log(err.response))
  }

    render(){
      const listaRender = this.state.usersList.map((user) => {
        return (
          <div key={user.id}>
            <span>{user.name}</span>
            <button onClick={() => this.deleteUser(user.id)}>Apagar {user.name}</button>
          </div>
        )
      })
    return (
      <div>
         <div>
         {listaRender}
           <hr/>
          
           <p>Procurar usuário.</p>
           <input placeholder="Nome exato para busca"/>
           <button>Salvar edição</button>
         </div>
        
      </div>
  
      
    );
  }}
  
  export default CadastroUsuario;