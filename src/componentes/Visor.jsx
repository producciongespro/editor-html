import Iframe from "./Iframe";
import { saveAs } from "file-saver";

export default function Visor(props) {
  const item = props.item;

  const handleDownload = () => {
    const content = item.titulo + "<hr>" + item.autor + item.cuerpo;
    const filename = "revista.html";

    var blob = new Blob([content], {
      type: "text/html;charset=utf-8",
    });

    saveAs(blob, filename);
  };

  return (
    <>
      <div className="row">
        <div className="col-8">Detalle Revista  <strong> {item.nombre} </strong> </div>
        <div className="col-2">
          <button className="btn btn-outline-info" 
          onClick={handleDownload}>
          📥
          </button>
        </div>
        <div className="col-2">
          <button className="btn btn-outline-success" 
          onClick={props.handleMostrarIndice}>
          🏠
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          {item && (
            <Iframe content={item.titulo + "<hr>" + item.autor + item.cuerpo} />
          )}
        </div>
      </div>
    </>
  );
}
