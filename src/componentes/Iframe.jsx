import React from 'react';

const Iframe = (props) => {
  const item= props.item;

  const content = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="author" content="${item.autor}">
    <title>Revista Conexiones - ${item.titulo}</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    
  </head>
  <body>



  <div className="row mb-4">
    <div className="alert  alert-secondary">
        <div class="col-6" >
          Revista Conexiones
        </div>
        <div className="col-6">
          Volumen: ${item.volumen} ${item.anno}
        </div>
    </div>  
  </div>

  <div className="row mb-2">
    <div className="col-12">
      <h2> ${item.titulo} </h2>
      <p> <strong> Por: </strong> ${item.autor} </p>
    </div>
  </div>  
  
  <div className="row">
  <div className="col-12">
    ${item.cuerpo}    
  </div>
</div> 


</body>
</html>
  `
    


   let iframe_ref = null;
   const writeHTML = (frame) => {
   if (!frame) {
     return;
   }
   iframe_ref = frame;
   let doc = frame.contentDocument;
   doc.open();
   doc.write(content);
   doc.close();
   frame.style.width = '100%';
   frame.style.height =     `${frame.contentWindow.document.body.scrollHeight}px`;
 };
 return (
  <iframe src="about:blank" scrolling="no" frameBorder="0"  ref= {writeHTML} 
  />
 );
};
export default Iframe;