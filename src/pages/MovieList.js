import { Card } from "../components";
import { useFetchMovies } from "../hooks/useFetchMovies";
export const MovieList = ({apiPath}) => {
  const { data: movies =[] } = useFetchMovies(apiPath);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-14">
        <div className="flex justify-start flex-wrap gap-2">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
