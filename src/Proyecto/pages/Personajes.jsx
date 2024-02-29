import { useParams } from "react-router-dom";
import useFetch from "./Hooks/useFetch";
function Personaje() {
   const { id } = useParams();
   const personaje = useFetch(`https://thronesapi.com/api/v2/Characters/${id}`, 'GET');
   return (
      personaje && 
      <div className="columna datos">
         <img alt={personaje.image} src={personaje.imageUrl}></img>
         <h4>Nombre: <span>{personaje.firstName || `Desconocido`}</span></h4>
         <h4>Apellido: <span>{personaje.lastName || `Desconocido`}</span></h4>
         <h4>Nombre completo: <span>{personaje.fullName || `Desconocido`}</span></h4>
         <h4>Título: <span>{personaje.title || `Desconocido`}</span></h4>
         <h4>Familia: <span>{personaje.family || `Desconocido`}</span></h4>
      </div>
   )
}

export default Personaje;