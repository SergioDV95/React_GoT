import { useRef } from "react";
import useCalculator from "./useCalculator";

function UseRef() {
  /*
    useRef es un hook que sirve para tener como referencia un elemento HTML,
    es similar al document.getElementByID. Nos permite acceder a un elemento HTML
  */
  const input = useRef();
  reiniciar()

  const changeValue = () => {
    input.current.value = "Nuevo valor";
    console.log(input);
  };

  const result = useCalculator("2+2-5")

  return (
    <>
      <input type="text" ref={input} />
      <button onClick={changeValue}>Cambiar Value del input</button>
      <p>{result}</p>
      <Button></Button>
    </>
  );
}

const reiniciar = () => {
  console.log("Hice un proceso");
}

function Button() {
  return(
    <>
      <button>Este es un boton</button>
    </>
  )
}

export default UseRef;

/*
  Ejercicio de useRef
  1. Hacer el ejercicio del modo nocturno con useRef
  2. Hacer el ejercicio de la calculadora con useRef
*/