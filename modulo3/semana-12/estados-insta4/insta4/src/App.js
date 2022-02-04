import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import Foto1 from './img/fotoperfil.jpeg'
import Foto2 from './img/girassol.jpg'
import Foto3 from './img/rosa.png'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
  
    usuarios: [
      
      {
        nomeUsuario: "paulinha",
        fotoUsuario:'https://picsum.photos/50/50',
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: "Gabriel",
        fotoUsuario:Foto1,
        fotoPost: Foto1
      },
      {
        nomeUsuario: "Lucas",
        fotoUsuario:Foto3,
        fotoPost: Foto3
      }
    ],
    valorInputUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  };
  adicionaPessoa = () => {

    const novoUsuario = {
      nomeUsuario: this.state.valorInputUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    };

    const novoPessoas = [...this.state.usuarios,novoUsuario];

    this.setState({ usuarios: novoPessoas });
  };

  onChangeInputUsuario = (event) => {
  
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputFotoUsuario = (event) => {
 
    this.setState({ valorInputFotoUsuario: event.target.value });
  };
  onChangeInputFotoPost = (event) => {
    this.setState({valorInputFotoPost: event.target.value });
  };

  
  render() {
    const usuarioNovos = this.state.usuarios.map((usuario) =>{
      return(<Post
        nomeUsuario={usuario.nomeUsuario}
        fotoUsuario={usuario.fotoUsuario}
        fotoPost={usuario.fotoPost}
      />);
    });
    return (
      <MainContainer>
         <div>{usuarioNovos}</div>
         <input

            value={this.state.valorInputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Nome"}
          />
          <input
            value={this.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"foto usuario"}
          />
          <input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"foto post"}
          />

          <button onClick={this.adicionaPessoa}>Adicionar</button>
          
      </MainContainer>
    );
  }
}

export default App;
