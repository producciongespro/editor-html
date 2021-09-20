import { useState, useEffect } from "react";
import Visor from "./componentes/Visor";
import Indice from "./componentes/Indice";
import Editor from "./componentes/Editor";

const API_ARTICULOS = "http://localhost:3500/api/articulos";

function App() {
  const [revistas, setRevistas] = useState(null);
  const [vistaActual, setVistaActual] = useState(null);

  const cargarDatos = async () => {
    let res = await fetch(API_ARTICULOS);
    res = await res.json();
    setRevistas(res);
  };

  useEffect(() => {
    cargarDatos();
  }, []);

  useEffect(() => {
    console.log("revistas cargadas--->", revistas);
    if (revistas) {
      setVistaActual(
        <Indice array={revistas} handleMostrarDetalle={handleMostrarDetalle} />
      );
    }
  }, [revistas]);

  const handleMostrarDetalle = (e) => {
    const i = e.target.id;
    const modo = e.target.dataset.modo;
    //console.log("modo", modo);

    if (modo === "vista") {
      setVistaActual(
        <Visor item={revistas[i]} handleMostrarIndice={handleMostrarIndice} />
      );
    }

    if (modo === "edicion") {
      setVistaActual(
        <Editor item={revistas[i]} edicion={true} handleMostrarIndice={handleMostrarIndice} />
      );
    }
  };

  const handleMostrarIndice = () => {
    console.log("Mostrando indice");
    setVistaActual(
      <Indice array={revistas} handleMostrarIndice={handleMostrarIndice} />
    );
  };

  const handleMostrarEditor = () => {
    console.log("Mostrando editor");
    setVistaActual(<Editor item={null} edicion={null} />);
  };

  return (
    <div className="container">
      <div className="row mb-4 pt-2">
        <div className="col-8 text-center">
          <h1>Test Descarga HTML</h1>
        </div>
        <div className="col-4">
          <button
            className="btn btn-outline-info"
            onClick={handleMostrarEditor}
          >           
            Editor
          </button>
        </div>
      </div>
      {vistaActual}
    </div>
  );
}

export default App;
