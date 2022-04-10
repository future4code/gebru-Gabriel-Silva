import React from "react";
import { goToApplicatinForm} from "../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function ListTripsPage() {
  const [trips, setTrips] = useState("")
   const navigate = useNavigate()
   useEffect(() => {
    const URL =
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-luiz-gebru/trips`
   
    axios
      .get(URL)
      .then((res) => {
        setTrips(res.data.trips)
      })
      .catch((err) => {
        console.log("ERRO:", err.response);
      });
  }, []);
    
  
  return (
    
      <div>
        ListTripsPage
        {trips && trips.map((i)=>{
         return <p>{i.name}</p>
        })}
        <button onClick={() => navigate(-1)}>Voltar</button>
        <button onClick={() => goToApplicatinForm(navigate)}>Viagens</button>

      </div>
    );
  }
  
  export default ListTripsPage;