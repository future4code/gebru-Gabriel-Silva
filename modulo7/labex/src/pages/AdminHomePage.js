import React from "react";
import { useProtectedPage } from "../customHooks/useProtectPage";
import { goToCreateTrip, goToHome, goToTripDetails } from "../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
 




function AdminHomePage() {
  useProtectedPage();
  
  const navigate = useNavigate()
  const [tripDetails, SetTripDetails] = useState("")

  
  useEffect(() => {
    const URL =
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-luiz-gebru/trips`
   
    axios
      .get(URL)
      .then((res) => {
        SetTripDetails(res.data.trips)
      })
      .catch((err) => {
        console.log("ERRO:", err.response);
      });
  }, []);
      

  console.log(tripDetails)   
  const name = tripDetails && tripDetails.map((i)=> {
    return (
    <div>
      <p>{i.name}</p>
      <button>Excluir</button>
    </div>
    )
  })
  return (
      <div>
        AdminHomePage

        <button onClick={() => goToHome (navigate)}>Voltar</button>
        <button onClick={() => goToCreateTrip(navigate)}>Criar Viagens</button>

        <div  onClick={() => goToTripDetails (navigate)}>
          {name}
       
        </div>

      </div>
    );
  }
  
  export default AdminHomePage;