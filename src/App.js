import  { useState, useEffect } from 'react';
import Iframe from './componentes/Iframe';




 function App() {


  const [revistas, setRevistas] = useState(null);

  const cargarDatos = async ()=> {
    let res = await fetch ("./data/revistas.json");
    res = await res.json();    
    setRevistas(res);
  }

  useEffect(()  =>  {
    cargarDatos();
  }, []);

  useEffect(() => {
    console.log(revistas);
  }, [revistas]);



  return (
    <div className="container">
        <h1>Test</h1> 
        {
          revistas &&
          <Iframe content={ revistas[0].titulo + "<hr>" + revistas[0].autor +   revistas[0].cuerpo} />
        }      
        
    </div>
  )



};


export default App;