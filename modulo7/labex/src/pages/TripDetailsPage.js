import React from "react";
import { useProtectedPage } from "../customHooks/useProtectPage";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";




function TripDetailsPage() {
  useProtectedPage();
  
  const [id, setId] = useState({})
  
  useEffect(() => {
    const URL =
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-luiz-gebru/trip/${id.id}`
    const headers = {
      headers: {
        auth: localStorage.getItem("token")
      }
    };

    axios
      .get(URL, headers)
      .then((res) => {
        setId(res.data.trip)
          
  console.log(res.data.trip);

        
      })
      .catch((err) => {
        console.log("ERRO:", err.response);
      });
  }, []);


  console.log(id);

    return (
      <div>
        TripDetailsPage
      </div>
    );
  }
  
  export default TripDetailsPage;