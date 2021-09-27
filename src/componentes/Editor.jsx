import React, { useRef, useState, useEffect } from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import * as utils from "../utils/utils";

const URL_API = "http://localhost:3500/api/articulos";

// html del articulo (retorno del editor)
let cuerpo;

/** Variable que almacena el id del registro. En caso de edición la toma del props item. En caso de edición de un isenrt
 * reciente la toma de la respuesta del servidor * 
 */

let _id;

export default function Editor(props) {
  const [updated, setUpdated] = useState(true);

  
  /*
  Alamacena la acción que se debe ejecutar a la hora de guardar el registro
  //Estados de accion -->  1: insert, 2: update, 3: update new 
        //Cuando es el modo edicion la acción es un update.
        // El estado de acción cambia a 3 en tiempo de ejecución ya que es cuando el usuario está actualizando un 
        //registro recién guardado.
  */
  const [accion, setAccion] = useState(props.accion);

  /*
  Alamcena el item enviado props en modo edición
  Si es un registro nuevo lo llena en runtime con la informaicón actual
  */  
  const item = props.item;
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
  console.log("accion cambiada-->",accion);
}, [accion]);

  const handleSendData = async () => {    
    let method;    
    //módo insert 
    //modo 
    if (accion === 1 )  {
      //Si edición es false carga el método post y cambia "edición" a true con el fin de 
      // que en los siguientes guardados los realice en modo "PUT" (update)
      method = "POST";
      setAccion(3)
    }
    // modo update
    if (accion === 2 || accion === 3 ) {      
      method = "PUT";
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
      cuerpo
    };

    const res = await utils.sendData(datos, _id);
    console.log(res);
    //Se carga el item del servidor para obtener el id y utilizarlo
    //para el siguiente guardado que es un update
    _id = res.item._id;

    //Establecer datos actualizados de datos:
    setUpdated(true);
    lastData = cuerpo;
  };

  const renderInfo = () => {
    if (accion === 2) {
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
        //Si es un update que viene de listar se asigna el cuerpo del item recibido mecibido mediante props.
        data={accion === 2 && item.cuerpo}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          //console.log( { event, editor, data } );
          //console.log(data);
          cuerpo = data;
          //Validar los datos para activar el btn "guardar"
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
