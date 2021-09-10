export default function Indice(props) {
  const array = props.array;
  console.log("recibidas", array);
  return (
    <div className="row">
      <div className="col-12 list-group">
        {array.map((item, i) => (
          <button
            key={i}
            id={i}
            className="list-group-item list-group-item-action"
            onClick={props.handleMostrarDetalle}
          >
            {item.titulo}
          </button>
        ))}
      </div>
    </div>
  );
}
