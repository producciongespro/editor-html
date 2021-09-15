
export async function sendData ({URL_API, titulo, volumen, anno, autor, cuerpo}) {

  const data = { titulo, volumen, anno, autor, cuerpo  }
  const resp = await fetch(URL_API, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    }
  });
  let json= await resp.json();
    return json;
  

}