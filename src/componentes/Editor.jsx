import React, {  useRef } from 'react';




export default function Editor(props) {
    const refContainer = useRef(null);

    const handleSetHeader =(e)=> {
        const openTag = "<H1>";
        const closeTag = "</H1> ";
        const txtEditor = refContainer.current;
        const start = txtEditor.selectionStart;
        // obtain the index of the last selected character
        const finish = txtEditor.selectionEnd;

        let texto = txtEditor.value;
        const output1 = [texto.slice(0, finish - 1), closeTag, texto.slice(finish)  ].join('');
        const output2 = [output1.slice(0, start), openTag, output1.slice(start)  ].join('');
        
        //console.log(output1);
        console.log(output2);
        txtEditor.value = output2;

        // obtain the selected text
        /*

        const sel = txtEditor.value.substring(start, finish);
        console.log(sel);
        console.log(start, "--", finish);
        console.log(texto);
        */
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
          <textarea className="form-control" ref={refContainer} id="txtEditor" cols="30" rows="10"></textarea>
        </div>
      </div>
    </>
  );
}
