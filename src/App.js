import { useState, useEffect } from "react";
import { saveAs } from 'file-saver';
import Visor from "./componentes/Visor";



const handleDownload =()=> {
  var content = "<h1>Hola</h1> Esta es una prueba";
  var filename = "revista.html";

var blob = new Blob([content], {
 type: "text/html;charset=utf-8"
});

saveAs(blob, filename);

}



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
          <button className="btn btn-success" onClick={handleDownload} > Descargar HTML </button>
        </div>
      </div>
      {revistas && <Visor item={revistas[0]} />}
    </div>
  );
}

export default App;
