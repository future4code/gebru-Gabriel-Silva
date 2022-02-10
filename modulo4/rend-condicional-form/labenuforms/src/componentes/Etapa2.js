import React from "react";

export default class Etapa2 extends React.Component{
    render(){
        return <div>
             <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
            <form>
                <label for="curso">5. Qual o curso? </label><br/>
                <input type="text" name="curso" id="curso"/><br/>
                <label for="unidadeEnsino">6. Qual a unidade de ensino? </label><br/>
                <input type="text" name="unidadeEnsino" id="unidadeEnsino"/><br/>
            </form>
               
            
        </div>
    }
}
