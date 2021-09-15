import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import * as utils from "../utils/utils";

const URL_API = "http://localhost:3500/api/articulos";

let cuerpo;


const handleSendData = async () => {
  const datos = {URL_API,  
    titulo: "prueba 123", 
    volumen: "123", 
    anno: 2021, 
    autor: "Pepito Mora", 
    cuerpo  }

  const res = await utils.sendData(datos);
  console.log(res);

}

export default function Editor(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-end mt-2 mb-2">
          <button 
          onClick={handleSendData}
          className="btn btn-outline-success"> 💾 </button>
        </div>
      </div>

      <CKEditor
        editor={ClassicEditor}
        data=""
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          //console.log( { event, editor, data } );
          console.log(data);
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
