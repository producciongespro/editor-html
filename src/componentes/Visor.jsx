import Iframe from "./Iframe";
import { saveAs } from "file-saver";

export default function Visor(props) {
  const item = props.item;

  const content = `
  <!DOCTYPE html>
  <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="${item.autor}" />
      <title>Revista conexiones ${item.titulo}</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      />
    </head>
    <body>
  
      <div class="container">
          <div class="row">
              <div class="alert alert-secondary">
                <div class="col-12">
                  <h1>Revista Conexiones</h1>
                  Volumen: ${item.volumen} ${item.anno}
                </div>
              </div>
            </div>
        
            <div className="row mb-2">
              <div className="col-12">
                <h2>${item.titulo}</h2>
                <p><strong> Por: </strong> ${item.autor}</p>
              </div>
            </div>
        
            <div className="row">
              <div className="col-12">${item.cuerpo}</div>
            </div>
      </div>
  
    </body>
  </html>
  
  `;

  const handleDownload = () => {    
    const filename = "revista.html";

    var blob = new Blob([content], {
      type: "text/html;charset=utf-8",
    });

    saveAs(blob, filename);
  };

  return (
    <>
      <div className="row mb-2">
        <div className="col-8">
          Detalle Revista <strong> {item.titulo} </strong>{" "}
        </div>
        <div className="col-2">
          <button className="btn btn-outline-info" onClick={handleDownload}>
            📥
          </button>
        </div>
        <div className="col-2">
          <button
            className="btn btn-outline-success"
            onClick={props.handleMostrarIndice}
          >
            🏠
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12"> <Iframe content={content} /></div>
      </div>
    </>
  );
}
