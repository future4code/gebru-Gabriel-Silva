import React from "react";
import CriarPlaylist from "./page/CriarPlaylist";
import VisualizarPlaylist from "./page/VisualizarPlaylist";

class App extends React.Component{
  
  
  render(){
    return (
      <div>
       <CriarPlaylist/>
       <VisualizarPlaylist/>
      </div>
    );
  }
}

export default App;
