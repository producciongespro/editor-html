import  { useState, useEffect } from 'react';




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
          revistas[0].cuerpo
        }
    </div>
  )



};


export default App;