import React from "react";
import axios from "axios";


class VisualizarPlaylist extends React.Component{
    state = {
        listaPlaylist: [],
        
      }
    
      componentDidMount() {
        this.getAllPlaylists()
      }
    
      getAllPlaylists = () => {
        
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
         axios
           .get(url, {
             headers: {
               Authorization: 'gabriel-luiz-gebru'
             }
           })
           .then(res => {
             this.setState({ listaPlaylist: res.data.result.list })
           })
           .catch(err => console.log(err.response))
      }
    
     
        render(){
          const listaPlaylist = this.state.listaPlaylist.map((playlist) => {
            return (
              <div key={playlist.id}>
                <p>{playlist.name}</p>
                
              </div>
            )
          })
        return (
          <div>
             <div>
             {listaPlaylist}
             </div>
            
          </div>
      
          
        );
      }}

export default VisualizarPlaylist;
