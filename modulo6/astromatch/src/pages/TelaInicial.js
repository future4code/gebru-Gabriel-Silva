import React, {useState, useEffect} from "react";
import axios from "axios";
import "./TelaInicial.css"

function TelaInicial(props) {
  
   

    return (
    <div >
      <div>
          <header>
              <div className="logo">
                  <h2>astroMatch</h2>
              </div>
              <div className="button-match">
                  <button onClick={props.trocarDeTela}>Match</button>
              </div>
          </header>
          <main>
    
            {props.pessoas && <img src={props.pessoas.photo}/>}
            <div>{props.pessoas && props.pessoas.name }</div>
            <div>{props.pessoas && props.pessoas.age }</div>
            <div>{props.pessoas && props.pessoas.bio }</div>
            <div> 
              <button>não</button>
              <button onClick={props.choosePerson}>sim</button>
            </div>
          </main>
      </div>
    </div>
  );
}

export default TelaInicial;