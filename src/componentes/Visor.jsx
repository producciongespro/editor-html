import Iframe from "./Iframe";

export default function Visor(props) {
    const item = props.item;


    return (
        <div className="row">
        <div className="col-sm-12">
          {item && (
            <Iframe content={item.titulo + "<hr>" + item.autor + item.cuerpo} />
          )}
        </div>
      </div>
    )
}
