import React, {useState, useEffect} from "react";
import TelaInicial from "./pages/TelaInicial";
import TelaMatch from "./pages/TelaMatch";
import axios from "axios";

function App() {
  return (
    <div >
      <TelaInicial/>
      <TelaMatch/>
    </div>
  );
}

export default App;
