export default function Indice(props) {
  const array = props.array;
  console.log("recibidas", array);
  return (
    <>
      {array.map((item, i) => (
        <div key={i} className="row">
          <div className="col-6 alert alert-info">{item.titulo}</div>
          <div
            className="col-2 text-center pt-3  alert alert-info"
            id={i}
            data-modo="edicion"
            role="button"
            onClick={props.handleMostrarDetalle}
          >
            ✏️
          </div>
          <div
            className="col-2 text-center pt-3  alert alert-info"
            id={i}
            data-modo="vista"
            role="button"
            onClick={props.handleMostrarDetalle}
          >
            👁️
          </div>

          <div
            className="col-2 text-center pt-3  alert alert-danger"
            id={item._id}
            role="button"
            onClick={props.hadleEliminarArticulo}
          >
            🗑️
          </div>
        </div>
      ))}
    </>
  );
}
