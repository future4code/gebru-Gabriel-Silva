import React, {useState, useEffect} from "react";
import TelaInicial from "./pages/TelaInicial";
import TelaMatch from "./pages/TelaMatch";
import axios from "axios";

function App() {
  

  const [trocar, setTrocar] = useState(false)
  const [pessoas, setPessoas] = useState()
  const [matchs, setmatchs] = useState([])

    const getMatches = () => {
      
        axios
      .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel-luiz-gebru/matches')
      .then(res=> {
        setmatchs( ...res.data.matches );
      })
      .catch(err => {
        console.log(err);
      });
    }
    console.log({matchs})
    useEffect(() => {
        getMatches()
  
}, [] )
  
  const getProfileToChoose = () => {
    axios
  .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel-luiz-gebru/person')
  .then(res=> {
    setPessoas( res.data.profile );
  })
  .catch(err => {
    console.log(err);
  });
}

useEffect(() => {
getProfileToChoose()

}, [] )

  const choosePerson = () => {
    const body = {
      id: pessoas.id,
      choice: true
    }
    axios
    .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel-luiz-gebru/choose-person",
    body)
    .then(res => {
      getProfileToChoose()
    })
    .catch(err => {
      console.log(err);
    });
    
  }
  const clear= () => {
    axios
  .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel-luiz-gebru/clear')
  .then(res=> {
    setPessoas();
  })
  .catch(err => {
    console.log(err);
  });
}


  
  const trocarDeTela = () =>{
    setTrocar(!trocar)
  }
    let match
    let telaInicial
    if (trocar) {
      match = <TelaMatch trocarDeTela= {trocarDeTela} matchs={matchs}
      />
    }else{
      telaInicial = <TelaInicial trocarDeTela= {trocarDeTela} pessoas={pessoas} choosePerson={choosePerson}/>
    }
  
  return (
    <div >
      {match}
      {telaInicial}
      <button onClick={clear}>Limpar</button>
    </div>
  );
}

export default App;
