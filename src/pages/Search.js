import { Card } from "../components";
import { useFetchMovies } from "../hooks/useFetchMovies";
import { useSearchParams } from "react-router-dom";

export const Search = ({apiPath}) =>{
      const [searchParam] =useSearchParams();
    const queryTerm=searchParam.get("q");
     const { data: movies =[] } = useFetchMovies(apiPath,queryTerm);

    return(
        <main className="max-w-9xl mx-auto py-14">
<section>
  <p className="text-3xl text-gray-700 dark:text-white justify-end">
    {movies.length === 0 ? (
      <>No result found for <b>{queryTerm}</b></>
    ) : (
      <>Result for <b>{queryTerm}</b></>
    )}
  </p>
</section>

      <section className="max-w-9xl mx-auto py-7" >
        <div className="flex text-left flex-wrap gap-2">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
    )
}