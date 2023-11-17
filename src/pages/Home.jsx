import Button from "./../components/Button";
import Section from "./../components/Section";

function Home() {
  return (
    <>
      <p>Hola Mundo</p>
      <div>
        <p>Otro parrafo</p>
        <Button></Button>
        <Button color="bg-green-600" text="Enviar"></Button>
        <Section>
          <Button color="bg-yellow-600" text="Guardar"></Button>
        </Section>
      </div>
    </>
  );
}

export default Home;