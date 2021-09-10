export default function Indice(props) {
  const array = props.array;
    console.log("recibidas", array);
  return (
    <div className="row">
      <div className="col-12 list-group">        
          {array.map((item) => (
            <button key={item.id} id={item.id} className="list-group-item list-group-item-action" > 
                 {item.nombre}
            </button>
          ))}
        
      </div>
    </div>
  );
}
