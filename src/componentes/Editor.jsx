import React, { useRef, useState, useEffect } from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import * as utils from "../utils/utils";

const URL_API = "http://localhost:3500/api/articulos";

// html del articulo (retorno del editor)
let cuerpo;

export default function Editor(props) {
  const [updated, setUpdated] = useState(true);

  let edicion = props.edicion;
  let item = props.item;
  /*
  Variable que almacena los últimos cambios guardados
  con el fin de comparar con data y verificar si hay pendiente por guardar 
  Si updated== true btn enviar datos no se renderiza
  */
  let lastData = "";

  const inputTitulo = useRef(null);
  const inputVolumen = useRef(null);
  const inputAutor = useRef(null);
  const inputAnno = useRef(null);

  useEffect(() => {
    renderInfo();
  }, []);

  useEffect(() => {
    console.log("updated", updated);
  }, [updated]);

  const handleSendData = async () => {
    let method;
    let _id;

    if (edicion) {
      method = "PUT";
    } else {
      method = "POST";
      edicion = true;
    }

    if (item) {
      _id = item._id;
    }

    const datos = {
      URL_API,
      method,
      titulo: inputTitulo.current.value,
      volumen: inputVolumen.current.value,
      anno: inputAnno.current.value,
      autor: inputAutor.current.value,
      cuerpo,
    };

    const res = await utils.sendData(datos, _id);
    console.log(res);
    item = res.item;

    //Establecer datos actualizados de datos:
    setUpdated(true);
    lastData = cuerpo;
  };

  const renderInfo = () => {
    if (edicion) {
      inputTitulo.current.value = item.titulo;
      inputVolumen.current.value = item.volumen;
      inputAutor.current.value = item.autor;
      inputAnno.current.value = item.anno;
    }
  };

  const validarUpdate = (tmpData) => {
    if (tmpData != lastData) {
      setUpdated(false);
    }
  };

  return (
    <div className="container">
      <div className="row mt-2 mb-2">
        <div className="col-10 text-end">
          <button
            className="btn btn-outline-success"
            onClick={props.handleMostrarIndice}
          >
            🏠
          </button>
        </div>

        {!updated && (
          <div className="col-2 text-end">
            <button
              onClick={handleSendData}
              className="btn btn-outline-success"
            >             
              💾
            </button>
          </div>
        )}
      </div>

      <div className="row">
        <div className="col-10">
          <input
            type="text"
            ref={inputTitulo}
            className="form-control"
            placeholder="Título"
          />
        </div>

        <div className="col-2">
          <input
            type="text"
            ref={inputVolumen}
            className="form-control"
            placeholder="Volumen"
          />
        </div>
      </div>

      <div className="row mt-2 mb-3">
        <div className="col-10">
          <input
            type="text"
            ref={inputAutor}
            className="form-control"
            placeholder="Autor"
          />
        </div>
        <div className="col-2">
          <input
            type="text"
            ref={inputAnno}
            className="form-control"
            placeholder="Año"
          />
        </div>
      </div>

      <CKEditor
        editor={ClassicEditor}
        data={edicion ? item.cuerpo : ""}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          //console.log( { event, editor, data } );
          //console.log(data);
          cuerpo = data;
          //Validar los datos para activar el btn
          validarUpdate(data);
        }}
        onBlur={(event, editor) => {
          // console.log( 'Blur.', editor );
        }}
        onFocus={(event, editor) => {
          // console.log( 'Focus.', editor );
        }}
      />
    </div>
  );
}
