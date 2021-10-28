import { useState, useEffect } from "react";
import Visor from "./componentes/Visor";
import Indice from "./componentes/Indice";
import Editor from "./componentes/Editor";
import {deleteRecord} from "./utils/utils";
import endpoints from "./endpoints";


function App() {
  const [revistas, setRevistas] = useState(null);
  const [vistaActual, setVistaActual] = useState(null);

  const cargarDatos = async () => {

    console.log("endpoints.articulos", endpoints.articulos);

    let res = await fetch(endpoints.articulos);
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
        <Indice array={revistas} handleMostrarDetalle={handleMostrarDetalle}  hadleEliminarArticulo={hadleEliminarArticulo} />
      );
    }
  }, [revistas]);

  const handleMostrarDetalle = (e) => {
    const i = e.target.id;
    const modo = e.target.dataset.modo;
    /*
    console.log("id", i);
    console.log("modo", modo);
  */


    if (modo === "vista") {
      setVistaActual(
        <Visor item={revistas[i]} handleMostrarIndice={handleMostrarIndice}  handleMostrarDetalle={handleMostrarDetalle}  />
      );
    }

    if (modo === "edicion") {
      setVistaActual(
        //Estados de accion -->  1: insert, 2: update, 3: update new 
        //Cuando es el modo edicion la acción es un update.
        // El estado de acción cambia a 3 en tiempo de ejecución ya que es cuando el usuario está actualizando un 
        //registro recién guardado.
        <Editor item={revistas[i]}  accion={2} handleMostrarIndice={handleMostrarIndice} />
      );
    }
  };

  const handleMostrarIndice = () => {
    console.log("cargando datos...");
    cargarDatos();

    console.log("Mostrando indice");
    setVistaActual(
      <Indice array={revistas} handleMostrarIndice={handleMostrarIndice} handleMostrarDetalle={handleMostrarDetalle} hadleEliminarArticulo={hadleEliminarArticulo} />
    );
  };

  const handleMostrarEditor = () => {
    console.log("Mostrando editor");
    //La acción corresponde a un insert (1) ya que se va a crtear un registro nuevo
    setVistaActual(<Editor item={null} accion={1} handleMostrarIndice={handleMostrarIndice} />);
  };

  const hadleEliminarArticulo = async (e)=> {    
    const res = await deleteRecord (endpoints.articulos, e.target.id);
    handleMostrarIndice();
  }

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
            📝 Crear nuevo
          </button>
        </div>
      </div>
      {vistaActual}
    </div>
  );
}

export default App;
