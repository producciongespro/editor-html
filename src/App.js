import  { useState, useEffect } from 'react';

const cargarDatos = async ()=> {
  let res = await fetch ("./data/revistas.json");
  res = await res.json();  
  console.log(res);
  return res;
}


function App() {

const revistas = cargarDatos();
console.log(revistas);


  return (
    <h1>Test</h1>
  )



};


export default App;