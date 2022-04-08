import axios from "axios";
import { useState } from "react";
import { goToTripDetails } from "../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import useForm from "../customHooks/useForm";
import { useProtectedPage } from "../customHooks/useProtectPage";

const LoginPage = () => {
 
  useProtectedPage()
  const navigate = useNavigate();
  const { form, onChange } = useForm({ email: "", password:""})


  const onSubmitLogin = (e) => {
    e.preventDefault()
   
    const URL ="https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-luiz-gebru/login";
    const body = {
      email: form.email,
      password: form.password
    };

    axios
      .post(URL, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        goToTripDetails(navigate);
      })
      .catch((err) => {
        console.log("ERRO:", err.response);
      });
  };
  

  return (
    <div>
             <h1>Login</h1>
             <form onSubmit={onSubmitLogin}>
                <input
                    placeholder={"E-mail"}
                   type={"email"}
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                     required
                 />
                <input
                     placeholder={"Senha"}
                     type={"password"}
                     name={"password"}
                     value={form.password}
                     onChange={onChange}
                     required
                 />
                 
                   {/*  <button onClick={() => goToHomePage(history)}>Voltar</button> */}
                    <button>Enviar</button>
                 
                 
             </form>        
             
     </div>
     
    
  );
};

export default LoginPage