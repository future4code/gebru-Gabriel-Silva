import React, {useState, useEffect} from "react";
import axios from "axios";

function TelaInicial() {
    const [pessoas, setPessoas] = useState()

    useEffect(() => {
        
    const getProfileToChoose = () => {
      axios
      .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel-luiz-gebru/person`)
      .then(response => {
        setPessoas(response.data.profile)
      })
      .catch(err => {
          console.log(err)
      })
    }
    
}, [] )


    return (
    <div >
      
    </div>
  );
}

export default TelaInicial;