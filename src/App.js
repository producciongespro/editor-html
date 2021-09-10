import { useState, useEffect } from "react";
import { saveAs } from "file-saver";
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

  const handleDownload = () => {
    const item = revistas[2];
    const content = item.titulo + "<hr>" + item.autor + item.cuerpo;
    const filename = "revista.html";

    var blob = new Blob([content], {
      type: "text/html;charset=utf-8",
    });

    saveAs(blob, filename);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <h1>Test Descarga HTML</h1>
        </div>
        <div className="col-4">
          <button className="btn btn-success" onClick={handleDownload}>            
            Descargar HTML
          </button>
        </div>
      </div>
      {revistas && <Visor item={revistas[2]} />}
    </div>
  );
}

export default App;
