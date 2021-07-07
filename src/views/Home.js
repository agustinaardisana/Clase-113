import useFetch from "../hooks/useFetch";
import PeliculasSection from "../components/PeliculasSection";

const Home = () => {
  const peliculasPopulares = useFetch("/peliculas-populares");
  const peliculasPuntuadas = useFetch("/peliculas-puntuadas");
  const peliculasUltimas = useFetch("/peliculas-ultimas");

  return (
    <>
      <h1>Soy HOME</h1>
      <PeliculasSection
        peliculas={peliculasPopulares}
        titulo={"Peliculas Populares"}
      />
      <PeliculasSection
        peliculas={peliculasPuntuadas}
        titulo={"Peliculas Mejor Puntuadas"}
      />
      <PeliculasSection
        peliculas={peliculasUltimas}
        titulo={"Ultimos Estrenos"}
      />
    </>
  );
};

export default Home;
