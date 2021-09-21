export default function Indice(props) {
  const handleMostrarDetalle = props.handleMostrarDetalle;
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
                data-modo="edicion"
                role="button"
                onClick={handleMostrarDetalle}
            >
               ✏️
            
            </div>
            <div className="col-2 text-center pt-3  alert alert-info"
               id={i}
               data-modo="vista"
               role="button"
               onClick={handleMostrarDetalle}
               
            >
            👁️
            </div>
          </div>
        ))}
   </>   
    
  );
}
