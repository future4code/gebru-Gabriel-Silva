import React from "react";
import CriarPlaylist from "./page/CriarPlaylist";
import VisualizarPlaylist from "./page/VisualizarPlaylist";
import MusicasPlaylist from "./page/MusicasPlaylist";

class App extends React.Component{
  
  
  render(){
    return (
      <div>
       <CriarPlaylist/>
       <VisualizarPlaylist/>
       <MusicasPlaylist/>
      </div>
    );
  }
}

export default App;
