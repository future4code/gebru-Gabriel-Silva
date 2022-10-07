
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from "react-apexcharts"

const App = () => {


  const [nome, setNome] = useState("")
  const [sobreNome, setSobreNome] = useState("")
  const [participacao, setParticipacao] = useState()
  const [users, setUsers] = useState([])
  
  const body = {
    nome,
    sobreNome,
    participacao : Number(participacao)
  }

  
  useEffect(()=> {
      axios.get("https://api-user-gg.herokuapp.com/users")
      .then(res => setUsers(res.data))
  },[body])

const onChangeNome = (e) => {
  setNome(e.target.value)
}
const onChangeSobreNome = (e) => {
  setSobreNome(e.target.value)
}
const onChangeParticipation = (e) => {
  setParticipacao(e.target.value)
}
const fazUsuario = (event) => {
  event.preventDefault()
 
  axios.post("https://api-user-gg.herokuapp.com/user",body)

  setNome("")
  setSobreNome("")
  setParticipacao("")
  
}
const deleteUser = (id) => {

  axios.delete(`https://api-user-gg.herokuapp.com/user/${id}`)

}
const table = users && users.map((item,index)=>{
  return (
     <> 
           <tr>
              <td>{index + 1}</td>
              <td>{item.nome}</td>
              <td>{item.sobreNome}</td>
              <td>{item.participacao} %</td>
              <td onClick={()=>deleteUser(item.id)}>x</td>
            </tr>
  
     </>
     )
})


const nomeSobreNome = []
const participacaoUsuario = []

users && users.forEach((i)=>{

  nomeSobreNome.push(`${i.nome} ${i.sobreNome}`)
  participacaoUsuario.push(i.participacao)

})


const state = {
  options: {
    labels: nomeSobreNome 
  },
  series: participacaoUsuario,
  
}

console.log(users)

  return(
    <>
     <section className="section-header">
        <header>
          <form onSubmit={fazUsuario}>
            <input placeholder="Name" onChange={onChangeNome} value={nome}required />
            <input placeholder="Last Name" onChange={ onChangeSobreNome} value={sobreNome} required/>
            <input placeholder="Participation"onChange={onChangeParticipation} value={participacao} required/>
            <button>SEND</button>     
          </form>
        </header>             
      </section>
      <main>
        <div className={"data"}>
          <h1>DATA</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing eit.</p>
        </div>
        <div className={"informacao"}>
          <div>
           <table >
              <tr>
                  <th> </th>
                  <th>Name</th>
                  <th>Last Name</th>
                  <th>Participation</th>
              </tr>
              {table}
              
           </table>
           </div>
           <Chart options={state.options} series={state.series} labels={state.labels} type="donut" width="380" />
        </div>

      </main>
    
    </>
  )
}
export default App;
