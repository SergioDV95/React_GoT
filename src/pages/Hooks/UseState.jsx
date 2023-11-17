/*
  UseState es un Hook que maneja los estados (variables) en una aplicación
  de React
*/

//Para utilizar Hooks debemos importarlos
import { useState } from "react";

/*
  Ejercicio en clase
  1) Realizar un boton que al hacer click, imprima un numero aleatorio (entero) en un parrafo
*/

function UseState(){
  const [color, setColor] = useState(null);
  const [modo, setModo] = useState(false);
  const [numero, setNumero] = useState(null);
  return(
    <>
      <div className={modo ? "h-screen w-full bg-black text-white" : "h-screen w-full text-black"}>
        <button onClick={() => {setColor("Rojo")}} >Cambiar de color</button>
        <p>{color}</p>
        <button onClick={() => {modo ? setModo(false) : setModo(true)}}>
          Cambiar modo {modo ? "nocturno" : "claro"}
        </button>
      </div>
      <div>
        <button onClick={() => {setNumero(Math.floor(Math.random() * 100))}}>Obtener numero aleatorio</button>
        <p>{numero}</p>
      </div>
    </>
  )
}

export default UseState;