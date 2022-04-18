import React from "react";
import { goToListTrips, goToAdminHome } from "../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../customHooks/useProtectPage";



function HomePage() {
  useProtectedPage()
  const navigate = useNavigate()
    return (
      <div>
        HomePage
            <button onClick={() => goToAdminHome(navigate)}>login</button>
           <button onClick={() => goToListTrips(navigate)}>Viagens</button>
      </div>
    );
  }
  
  export default HomePage;