
import React from "react"
import './App.css';
import Etapa1 from "./componentes/Etapa1.js"
import Etapa2 from "./componentes/Etapa2.js"
import Etapa3 from "./componentes/Etapa3.js"
import Final from "./componentes/Final.js"


class App extends React.Component{
  state = {
    etapa: 1,
    

  }
  renderizaEtapa = () => {
   
      switch (this.state.etapa) {
        case 1: 
          return <Etapa1 />;
        case 2: 
          return <Etapa2 />;
        case 3: 
          return <Etapa3 />;
        case 4: 
          return <Final />;
        default:
          return <p>Pagina não encontrada</p>;
  
  }
  
  }
  irParaProximaEtapa = () => {
    this.setState({etapa: this.state.etapa + 1});
}
  render(){
      return <div>
        
        	{this.renderizaEtapa()}
          
       {this.state.etapa !== 4 && <button onClick={this.irParaProximaEtapa}>Próxima Etapa</button>}
          
      </div>
  }
}

export default App;