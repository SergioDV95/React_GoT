import Button from './Button'

function Header() {
    return (
        <nav className='flex justify-around items-center py-[25px] border-b-[2px]'>
            <Button text="Inicio" color="bg-red-500"></Button>
            <Button text="Contacto" color="bg-red-500"></Button>
            <Button text="Nosotros" color="bg-red-500"></Button>
        </nav>
    );
}

export default Header;