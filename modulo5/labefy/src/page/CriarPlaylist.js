import React from "react";
import axios from "axios";


class CriarPlaylist extends React.Component{
  state = {
      playlist: ""
  }

  criarPlaylist = () => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

    const body = {
      name: this.state.playlist,
      
    }

    axios
       .post(url, body, {
       headers: {
          Authorization: 'gabriel-luiz-gebru'
         }
       })
       .then(res => {
        this.setState({ playlist: ''})
        console.log(body)
       })
      .catch(err => alert(err.response.data.message))
  }
  
  onChangePlaylist = (event) => {
      this.setState({playlist: event.target.value})
  }
  
  
    render(){
    return (
      <div>
        <h1>Crie sua Playlist</h1>
        <input onChange={this.onChangePlaylist} value={this.state.playlist}/>
        <button onClick={this.criarPlaylist}>Criar Playlist</button>
        
      </div>
    );
  }
}

export default CriarPlaylist;
