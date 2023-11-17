import {useState, useEffect} from "react";
import useFetch from "./Hooks/useFetch";
import { Link } from "react-router-dom";
import "./Estilos/index.css";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home(){
	const datos = useFetch('https://thronesapi.com/api/v2/Characters');
	const [diapositivaActual, setDiapositiva] = useState(Number(localStorage.getItem('diapositiva')) || 0);

	useEffect(() => {
		localStorage.setItem('diapositiva', diapositivaActual);
	}, [diapositivaActual]);

	return(
      <Carousel className="carrusel" selectedItem={diapositivaActual} onChange={index => {setDiapositiva(index)}} showThumbs={false}>
         {datos && datos.map(item => {
            return(
               <Link className="personaje" to={`/personajes/${item.id}`} key={item.id}>
                  <div className="columna datos">
                     <h3>{item.fullName ?? `Desconocido`}</h3>
                     <h4>{item.title ?? `Desconocido`}</h4>
                  </div>
                  <div className="imagen columna">
                     <img className="imagen" alt={item.image} src={item.imageUrl}></img>
                  </div>
               </Link>
            )
         })}
      </Carousel>
	)
};

export default Home;