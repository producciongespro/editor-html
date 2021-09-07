import { useState, useEffect } from "react";
import Visor from "./componentes/Visor";

function App() {
  const [revistas, setRevistas] = useState(null);

  const cargarDatos = async () => {
    let res = await fetch("./data/revistas.json");
    res = await res.json();
    setRevistas(res);
  };

  useEffect(() => {
    cargarDatos();
  }, []);

  useEffect(() => {
    console.log(revistas);
  }, [revistas]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
        <h1>Test Descarga HTML</h1>
        </div>
        <div className="col-4">
          <button></button>
        </div>
      </div>
      {revistas && <Visor item={revistas[0]} />}
    </div>
  );
}

export default App;
