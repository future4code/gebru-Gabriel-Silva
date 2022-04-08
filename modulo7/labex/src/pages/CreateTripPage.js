import React from "react";
import { useProtectedPage } from "../customHooks/useProtectPage";
import { useNavigate } from "react-router-dom";
import useForm from "../customHooks/useForm";
import axios from "axios";




function CreateTripPage() {

  useProtectedPage();
 
  const navigate = useNavigate()
  const { form, onChange} = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" })

  const CreateTrip = (e) => {
        e.preventDefault()
      
        const body = form
        const URL ="https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-luiz-gebru/trips"  
      
      
        axios.post(URL, body, {
          headers: {auth: localStorage.getItem("token")}
      })
      .then(() => {
          alert("Viagem adicionada com sucesso!")
          
      })
      .catch((err) => alert(err.response.data.message))
  }
    


    return (
      <div>
      <h1>Criar Viagem</h1>
      <form onSubmit={CreateTrip}>
          <input
              placeholder={"Nome"}
              name={"name"}
              value={form.name}
              onChange={onChange}
              pattern={"^.{5,}$"}
              title={"O nome da viagem deve ter no mínimo 5 caracteres"}
              required
          />
          <select
              placeholder={"Planeta"}
              name={"planet"}
              defaultValue={""}
              onChange={onChange}
              required
          >
              <option value={""} disabled>Escolha um Planeta</option>
              <option value={"Mercurio"}>Mercúrio</option>
              <option value={"Venus"}>Vênus</option>
              <option value={"Terra"}>Terra</option>
              <option value={"Marte"}>Marte</option>
              <option value={"Jupiter"}>Jupiter</option>
              <option value={"Saturno"}>Saturno</option>
              <option value={"Urano"}>Urano</option>
              <option value={"Netuno"}>Netuno</option>
              <option value={"Plutão"}>Plutão</option>



          </select>
          <input
              placeholder={"Data"}
              type={"date"}
              name={"date"}
              value={form.date}
              onChange={onChange}
              required
              
          />
          <input
              placeholder={"Descrição"}
              name={"description"}
              value={form.description}
              onChange={onChange}
              required
              pattern={"^.{30,}$"}
              title={"O nome deve ter no mínimo 30 caracteres"}
          />
          <input
              placeholder={"Duração em dias"}
              type={"number"}
              name={"durationInDays"}
              value={form.durationInDays}
              onChange={onChange}
              required
              min={50}
          />
          
              {/* <button onClick={() => goToAdminHomePage(history)}>Voltar</button> */}
              <button>Criar</button>
          
      </form>
  </div>
    );
  }
  
  export default CreateTripPage;