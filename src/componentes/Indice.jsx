export default function Indice(props) {
  const array = props.array;
    console.log("recibidas", array);
  return (
    <div className="row">
      <div className="col-12">
        <ul>
          {array.map((item, i) => (
            <li key={i} > {item.titulo} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
