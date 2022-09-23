import { useEffect, useState } from "react";
import axios from "axios";
import SVG from "./Sidebar.svg";
import "./App.css";

export default function App() {
  const [loteria, setLoteria] = useState();
  const [idLoteria, setIdLoteria] = useState();
  const [concurso, setConcurso] = useState();
  const [concursoId, setConcursoId] = useState();
  const [jogos, setJogos] = useState();

  useEffect(() => {
    axios
      .get("https://brainn-api-loterias.herokuapp.com/api/v1/loterias")
      .then((res) => setLoteria(res.data));
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://brainn-api-loterias.herokuapp.com/api/v1/loterias-concursos"
      )
      .then((res) => setConcurso(res.data));
  }, []);

  useEffect(() => {
    concurso &&
      concurso.forEach((item) => {
        if (item.loteriaId === idLoteria) {
          setConcursoId(item.concursoId);
        }
      });
  }, [idLoteria]);

  useEffect(() => {
    axios
      .get(
        `https://brainn-api-loterias.herokuapp.com/api/v1/concursos/${concursoId}`
      )
      .then((res) => setJogos(res.data));
  }, [concursoId]);

  const Option =
    loteria &&
    loteria.map((item) => {
      return <option key={item.id}>{item.nome}</option>;
    });

  const nomeLoteria =
    loteria &&
    loteria.map((i) => {
      if (i.id === idLoteria) {
        return i.nome.toUpperCase();
      }
    });

  const numeroconcurso =
    jogos &&
    jogos.numeros.map((i) => {
      return (
        <div className="circulo">
          <p>{i}</p>
        </div>
      );
    });

  const onChange = (e) => {
    setIdLoteria(e.target.selectedIndex);
  };

  return (
    <div className="App">
      <div className="conteiner30" style={{ backgroundImage: `url(${SVG})` }}>
        <div className="container-concurso">
          <select onChange={onChange}>{Option}</select>

          <div>
            <h2>{nomeLoteria}</h2>
          </div>
          <div>
            <p>concurso</p>

            <p>
              {jogos && jogos.id} - {jogos && jogos.data}
            </p>
          </div>
        </div>
      </div>
      <div className="conteiner70">
        <div className="container-bolinhas">
          <div>{numeroconcurso}</div>
        </div>
        <p className="paragrafo">
          Este sorteio é meramente ilustrativo e não possui nenhuma ligação com
          a CAIXA.
        </p>
      </div>
    </div>
  );
}
