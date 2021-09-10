import { useState, useEffect } from "react";
import Visor from "./componentes/Visor";
import Indice from "./componentes/Indice";

function App() {
  const [revistas, setRevistas] = useState(null);  
  const [vistaActual, setVistaActual] = useState(null);

  const cargarDatos = async () => {
    let res = await fetch("./data/revistas.json");
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
        <Indice 
          array={revistas} 
          handleMostrarDetalle={handleMostrarDetalle}          
          />
      );
    }
  }, [revistas]);


  const handleMostrarDetalle =(e)=> {
    const i = e.target.id;
    setVistaActual(
      <Visor  
        item= { revistas[i] }  
        handleMostrarIndice={handleMostrarIndice}
        />
    )
  }

  const handleMostrarIndice =()=> {
    console.log("Mostrando indice");
    setVistaActual(
      <Indice 
        array={revistas} 
        handleMostrarDetalle={handleMostrarDetalle}         
        />
    );
  }

  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col-12 text-center">
          <h1>Test Descarga HTML</h1>
        </div>
      </div>
      {vistaActual}
    </div>
  );
}

export default App;
