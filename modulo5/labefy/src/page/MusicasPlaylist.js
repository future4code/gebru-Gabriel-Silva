import React from "react";
import axios from "axios";


class MusicasPlaylist extends React.Component{
    state = {
        musicas: [],
        
      }
    
    
      getPlaylistTracks = (playlistId) => {
        
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`
         axios
           .get(url, {
             headers: {
               Authorization: 'gabriel-luiz-gebru'
             }
           })
           .then(res => {
             this.setState({ musicas: res.data.result.list })
             console.log(this.state.musicas)
           })
           .catch(err => console.log(err.response))
      }
    
     
        render(){
          const listaMusicas = this.state.musicas.map((musicas) => {
            return (
              <div key={musicas.id}>
                <p>{musicas.name}</p>
                
              </div>
            )
          })
        return (
          <div>
             <div>
             {listaMusicas}
             </div>
            
          </div>
      
          
        );
      }}

export default MusicasPlaylist;
