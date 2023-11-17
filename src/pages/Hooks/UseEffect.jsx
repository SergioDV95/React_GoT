import { useState, useEffect } from "react";

function UseEffect() {
  const [counter, setCounter] = useState(0)

  /*
    El useEffect es un Hook que nos permite realizar cosas en segundo
    plano (asincronismo)

    El useEffect cuenta con dos parametros>:

    1) Lo que se ejecutara en segundo plano (funcion anonima)

    2) Las dependencias (Variables que cada vez que son actualizadas,
      hacen que el useEffect se vuelva a ejecutar), tener en consideración:
      - Si no agrego un este segundo parametro el useEffect se ejecutara
        constantemente
      - Si agrego corchetes vacios significa que no hay dependencias, el useEffect
        solo se ejecutara una sola vez
      - Si agrego alguna variable utilizada dentro del useEffect como dependencia, Ej:
        [counter], entonces el useEffect se ejecutara cada vez que la dependencia cambie su valor
  */

  useEffect(
    () => {
      setTimeout(
        () => {
          setCounter(counter + 1)
        }, 1000
      )
    }, [counter]
  )

  return(
    <>
      <p>Me he renderizado {counter} veces</p>
    </>
  )
}

/*
  Ejercicios
  1) Crear el piedra papel o tijeras en React utilizando estados (utilizar useState)
  2) Crea una página sencilla consumiendo una Api (Utilizar useEffect y useState)
*/

export default UseEffect;