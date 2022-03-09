
import React from "react"
import TelaUsuario from "./componentes/TelaUsuario";
import CadastroUsuario from "./componentes/cadatro";
import './App.css';

class App extends React.Component {
  
  state = {
    trocar: false,
  }

  
  trocarDeTela = () =>{
    this.setState({trocar: !this.state.trocar})
  }
 
  render(){
    let cadatro
    let telaUsuario
    if (this.state.trocar) {
      cadatro = <CadastroUsuario/>
    }else{
      telaUsuario = <TelaUsuario />
    }
  return (
    <div>
     
       <button onClick={this.trocarDeTela}>Trocar de tela</button> <br/>
       {cadatro}
       {telaUsuario}
    </div>

    
  );
}}

export default App;
