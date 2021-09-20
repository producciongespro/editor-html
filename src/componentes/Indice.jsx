export default function Indice(props) {
  const array = props.array;
  console.log("recibidas", array);
  return (    
      <>
        {array.map((item, i) => (
          <div key={i} className="row">
            <div className="col-8 alert alert-info">{item.titulo}</div>
            <div 
                className="col-2 text-center pt-3  alert alert-info" 
                id={i}
                data-mode="edit"
                role="button"
                onClick={props.handleMostrarDetalle}
            >
               ✏️
            
            </div>
            <div className="col-2 text-center pt-3  alert alert-info"
               id={i}
               data-mode="view"
               role="button"
               onClick={props.handleMostrarDetalle}
            >
            👁️
            </div>
          </div>
        ))}
   </>   
    
  );
}
