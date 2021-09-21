import React, { useRef, useEffect } from 'react';

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import * as utils from "../utils/utils";

const URL_API = "http://localhost:3500/api/articulos";

let cuerpo;




export default function Editor(props) {  

  const edicion= props.edicion;
  const item= props.item;

  const inputTitulo = useRef(null);
  const inputVolumen = useRef(null);
  const inputAutor = useRef(null);
  const inputAnno = useRef(null);


  useEffect(() => {
    renderInfo();
  }, []);

  const handleSendData = async () => {
    let method;
    let _id;

    if (edicion) {
      method = "PUT"
    } else {
      method = "POST"
    }

    if (item) {
     _id = item._id 
    }

    const datos = {
      URL_API,
      method,  
      titulo: inputTitulo.current.value, 
      volumen: inputVolumen.current.value, 
      anno: inputAnno.current.value, 
      autor: inputAutor.current.value, 
      cuerpo  }
  
    const res = await utils.sendData(datos, _id);
    console.log(res);
  
  }

  const renderInfo =()=> {

    if (edicion) {
      inputTitulo.current.value= item.titulo;
      inputVolumen.current.value = item.volumen;
      inputAutor.current.value = item.autor;
      inputAnno.current.value = item.anno;      
    }

  };

 


  return (
    <div className="container">

<div className="row">        
        <div className="col-12 text-end mt-2 mb-2">
          <button 
          onClick={handleSendData}
          className="btn btn-outline-success"> 💾 </button>
        </div>
      </div>


<div className="row">
  <div className="col-10">
    <input type="text" ref={inputTitulo}  className="form-control" placeholder="Título" />
  </div>

  <div className="col-2">
    <input type="text" ref={inputVolumen}  className="form-control" placeholder="Volumen" />
  </div>
  
</div>

<div className="row mt-2 mb-3">
  <div className="col-10">
    <input type="text" ref={inputAutor}  className="form-control" placeholder="Autor" />
  </div>
  <div className="col-2">
    <input type="text" ref={inputAnno}  className="form-control" placeholder="Año" />
  </div>
</div>

  

      <CKEditor
        editor={ClassicEditor}
        data={  edicion ? item.cuerpo : ""  }
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          //console.log( { event, editor, data } );
          //console.log(data);
          cuerpo=data;
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
