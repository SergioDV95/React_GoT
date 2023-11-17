import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Api() {
  return (
    <>
      <ApiKey></ApiKey>
      <ApiNoKey></ApiNoKey>
    </>
  );
}

function ApiNoKey() {
  const [data, setData] = useState(null);
  const [link] = useState("https://fortnite-api.com/v2/cosmetics/br");

  useEffect(() => {
    fetch(link)
      .then((response) => response.json())
      .then((elements) => setData(elements));
  }, [link]);

  return (
    <>
      <Link to="/">Home</Link>
      {data &&
        data.data.map((element, index) => {
          if (index >= 10) {
            return null;
          }
          return (
            <div key={element.id}>
              <img src={element.images.smallIcon} alt={element.name} />
              <p>{element.name}</p>
            </div>
          );
        })}
    </>
  );
}

function ApiKey() {
  const [data, setData] = useState({
    info: null,
    link: "https://love-calculator.p.rapidapi.com/getPercentage?sname=Hugo&fname=Maduro",
    options: {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "0f72fb545amshd55cba78a64604cp1e632fjsn672837304d0b",
        "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
      },
    },
  });
  const input1 = useRef();
  const input2 = useRef();
  
  useEffect(() => {
    fetch(data.link, data.options)
      .then((response) => response.json())
      .then((elements) => setData({ ...data, info: elements }));
    // eslint-disable-next-line
  }, [data.link, data.options]);

  const calcular = () => {
    setData({
      ...data,
      link: `https://love-calculator.p.rapidapi.com/getPercentage?sname=${input1.current.value}&fname=${input2.current.value}`,
    });
  };

  return (
    <>
      <p>Calculadora del amor</p>
      <input type="text"  placeholder="primer nombre" ref={input1}/>
      <input type="text" placeholder="segundo nombre" ref={input2} />
      <button onClick={() => {calcular()}}>Calcular</button>
      {
        data.info && (
          <>
            <p>{data.info.percentage}</p>
            <p>{data.info.result}</p>
          </>
        )
      }
    </>
  );
}

export default Api;

/*
  const prueba = (a, b) => {
    return a + b;
  };

  console.log(prueba(1, 2));
  console.log(prueba);

  const prueba2 = (a) => {
    if (a) {
      a();
    } else {
      console.log("No hay funcion");
    }
  };

  prueba2(
    () => {
      console.log("Hola");
    }
  );
*/

/*
  Proyecto
  Hacer una página que consuma una API, esta debe tener una página general de elementos.
  Y debe además tener una página de detalle de cada elemento. Solo son necesarias dos páginas
  para este ejercicio. La visualización del trabajo debe ser decente.

  Fecha limite: Jueves 14/09/23 
*/