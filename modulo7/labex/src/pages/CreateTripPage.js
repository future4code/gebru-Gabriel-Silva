import React from "react";
import { useProtectedPage } from "../customHooks/useProtectPage";




function CreateTripPage() {

  useProtectedPage();


    return (
      <div>
        CreateTripPage
      </div>
    );
  }
  
  export default CreateTripPage;