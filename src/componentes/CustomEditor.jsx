import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function CustomEditor(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-end mt-2 mb-2">
          <button className="btn btn-outline-success"> 💾 </button>
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
