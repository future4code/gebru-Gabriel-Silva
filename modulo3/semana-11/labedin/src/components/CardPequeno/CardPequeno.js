import React from 'react';
import styled from 'styled-components'

const Div = styled.div`
display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
`
const Img = styled.img`
width: 20px;
    margin-right: 10px;
    border-radius: 50%;

`


function CardPequeno(props) {
    return (
        <Div>
            <Img src={ props.imagem } />
            <h4>{ props.nome }</h4>
            <p>{ props.descricao }</p>
            
        </Div>
    )
}

export default CardPequeno;