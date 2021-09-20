
export async function sendData ({URL_API, method, titulo, volumen, anno, autor, cuerpo}, _id) {

  if (_id) {
    URL_API = URL_API+"?_id="+_id;
  }

  const data = { titulo, volumen, anno, autor, cuerpo  }
  const resp = await fetch(URL_API, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    }
  });
  let json= await resp.json();
    return json;
  

}