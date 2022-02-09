import React from "react";

export default class Etapa1 extends React.Component{
    render(){
        return <div>
            <h1>ETAPA 1 - DADOS GERAIS</h1>
            <form>
                <label for="nome">1. Qual o seu nome? </label><br/>
                <input type="text" name="nome" id="nome"/><br/>
                <label for="idade">2. Qual é a sua idade? </label><br/>
                <input type="number" name="idade" id="idade"/><br/>
                <label for="email">3. Qual o seu email? </label><br/>
                <input type="email" name="email" id="email"/><br/>
                <label for="escolaridade">4. Qual é a sua escolaridade? </label><br/>
                <input type="text" name="escolaridade" id="escolaridade"/><br/>


            </form>
        </div>
    }
}
