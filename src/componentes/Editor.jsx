import React, {  useRef } from 'react';




export default function Editor(props) {
    const refContainer = useRef(null);

    const handleSetHeader =(e)=> {
        let txtEditor = refContainer.current;
        const start = txtEditor.selectionStart;
        // obtain the index of the last selected character
        const finish = txtEditor.selectionEnd;
        // obtain the selected text
        const sel = txtEditor.value.substring(start, finish);
        console.log(sel);
        console.log(start, "--", finish);
        //console.log(texto);
    }

  return (
    <>
      <div className="row mb-2">
          <div className="col-12">
              <button className="btn btn-outline-success" onClick={handleSetHeader} >H1</button>
          </div>
      </div>

      <div className="row">
        <div className="col-sm-12" >
          <textarea ref={refContainer} id="txtEditor" cols="30" rows="10"></textarea>
        </div>
      </div>
    </>
  );
}
