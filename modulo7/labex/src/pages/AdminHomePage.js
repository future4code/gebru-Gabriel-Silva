import React from "react";
import { useProtectedPage } from "../customHooks/useProtectPage";




function AdminHomePage() {
  useProtectedPage();
  
  return (
      <div>
        AdminHomePage
      </div>
    );
  }
  
  export default AdminHomePage;