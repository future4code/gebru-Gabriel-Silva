import React, {useState, useEffect} from "react";
import axios from "axios";

function TelaMatch(props) {
  const matches = () => { props.matchs.map((mat) =>{

    return(
      <div>
        <img src={mat.photo}/>
        <p>{mat.name}</p>
      </div>
    )
  })

  }
    
  return (
    <div >
  
         <button onClick={props.trocarDeTela}>TelaInicial</button>
         {matches}
      
    </div>
  );
}

export default TelaMatch;