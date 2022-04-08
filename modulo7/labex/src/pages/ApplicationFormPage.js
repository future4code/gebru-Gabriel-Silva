import React from "react";
import { useProtectedPage } from "../customHooks/useProtectPage";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useForm from "../customHooks/useForm";





function ApplicationFormPage() {
  const [trips, setTrips] = useState("")
  const { form, onChange} = useForm({ name: "", age: "", applicationText: "", profession: "", country: "" })
  const navigate = useNavigate()
  const [tripss, setTripss] = useState({})
  const pais = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
 
 
  const onClickEnviar = (event) => {
      event.preventDefault()
      const body = form
      const URL =`https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-luiz-gebru/trips/${trips}/apply`

      axios.post(URL, body)
      .then(() => {
          alert("enviada com sucesso!")
          
      })
      .catch((err) => alert(err.response.message))
  }
  
  
  useEffect(() => {
    const URL =
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-luiz-gebru/trips`
   
    axios
      .get(URL)
      .then((res) => {
        setTripss(res.data.trips)
      })
      .catch((err) => {
        console.log("ERRO:", err.response);
      });
  }, []);

  console.log(tripss)


  /* const tripsSelection = tripss && tripss.map((id) => {
      return <option key={id.id} value={id.id}>{id.name}</option>
  }) */
    return (
      <div>
        <h1>Inscreva-se para uma viagem</h1>
          <form onSubmit={onClickEnviar}>
              <select defaultValue="" onChange={e => setTrips(e.target.value)}>
                  <option value="" disabled>Escolha uma Viagem</option>
                  {/* {tripsSelection} */}
              </select>
              <input
                  placeholder={"Nome"}
                  value={form.name}
                  name={"name"}
                  pattern={"^.{3,}$"}
                  onChange={onChange}
                  title={"O nome deve ter no mínimo 3 caracteres"}
                  required
              />
              <input
                
                  type={"number"}
                  name={"age"}
                  placeholder={"Idade"}
                  value={form.age}
                  onChange={onChange}
                  required
                  min={18}
              />
              <input
                  placeholder={"Texto de Candidatura"}
                  name={"applicationText"}
                  onChange={onChange}
                  value={form.applicationText}
                  required
                  pattern={"^.{30,}$"}
                  title={"O texto deve ter no mínimo 30 caracteres"}
              />
              <input
                  placeholder={"Profissão"}
                  name={"profession"}
                  value={form.profession}
                  onChange={onChange}
                  required
                  pattern={"^.{10,}$"}
                  title={"A profissão deve ter no mínimo 10 caracteres"}
              />
              <select
                  placeholder={"País"}
                  name={"country"}
                  value={form.country}
                  onChange={onChange}
                  required
              >
                  <option value={""} disabled>Escolha um País</option>
                  {pais.map((pais) => {
                      return <option value={pais} key={pais}>{pais}</option>
                  })}
              </select>
              
                  {/* <button onClick={() => goToListTripsPage(history)}>Voltar</button> */}
                  <button>Enviar</button>
              
          </form>
      </div>
    );
  }
  
  export default ApplicationFormPage;