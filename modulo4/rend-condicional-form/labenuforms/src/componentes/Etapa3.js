import React from "react";




export default class Etapa3 extends React.Component{
    render(){
        return <div>
             <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
            <form>
                <label for="abandono">7. Por que você não terminou um curso de graduação? </label><br/>
                <input type="text" name="abandono" id="abandono"/><br/>
                <label for="cursoComplementar">8. Você fez algum curso complementar? </label><br/>
                <input type="text" name="cursoComplementar" id="cursoComplementar"/><br/>
            </form>
            
        </div>
    }
}
