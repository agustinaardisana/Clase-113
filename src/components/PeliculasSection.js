import React from "react";
import { Link } from "react-router-dom";
const PeliculasSection = ({ peliculas, titulo }) => {
  console.log(peliculas);
  return (
    <section>
      <h2>{titulo}</h2>
      <div>
        {peliculas &&
          peliculas.map((pelicula) => (
            <Link to={`/detalle/${pelicula.id}`}>
              <article>
                {pelicula.title}
                <p>{pelicula.id}</p>
              </article>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default PeliculasSection;
