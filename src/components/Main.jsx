import Header from '../components/Header';
import Footer from '../components/Footer';

function Main(){
    return(
        <>
            <Header></Header>
            <div className='flex justify-center items-center h-[80vh]'>
                <h1>Este es el contenido de la sección</h1>
            </div>
            <Footer text="© 2023 Sergio"></Footer>
        </>
    )
}

export default Main;