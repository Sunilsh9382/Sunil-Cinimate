import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import backup from "../assets/images/backup.png";

export const MovieDetail = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const params = useParams();
  const [data, setData] = useState({});
  const image = data.poster_path
    ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
    : backup;

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}`
      );
      const json = await response.json();
      setData(json);
      console.log(json);
    }
    fetchMovie();
  }, [params.id]);
  return (
    <main>
      <section className="flex justify-around flex-wrap py-10">
        <div className="max-w-sm ml-52">
          <img className="rounded" src={image} alt={data.title} />
        </div>
        <div className="max-w-2xl text-gray-700 text-lg mr-56 dark:text-white">
          <h1 className="text-4xl font-bold my-3 text-center lg:text-left">
            {data.title}
          </h1>
          <p className="py-4 text-left">{data.overview}</p>
          {data.genres ? (
            <p className="py-4 flex-wrap text-start">
              {data.genres.map((genre) => (
                <span
                  className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2"
                  key={genre.id}
                >
                  {genre.name}
                </span>
              ))}
            </p>
          ) : (
            ""
          )}

          <div className="flex items-center py-5">
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2 text-xl font-bold text-gray-900 dark:text-white">
              {data.vote_average}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <p className="text-xl font-medium text-gray-900 hover:no-underline dark:text-white">
              {data.vote_count} reviews
            </p>
          </div>
          <div className="text-left">
            <p className="ms-2 text-xl py-2 text-gray-900 dark:text-white">
              <span className="font-bold">Runtime:</span> {data.runtime}
            </p>

            <p className="ms-2 text-xl py-2 text-gray-900 dark:text-white">
              <span className="font-bold">Budget:</span> {data.budget}
            </p>

            <p className="ms-2 text-xl py-2 text-gray-900 dark:text-white">
              <span className="font-bold">Revenue:</span> {data.revenue}
            </p>

            <p className="ms-2 text-xl py-2 text-gray-900 dark:text-white">
              <span className="font-bold">Release Date:</span>{" "}
              {data.release_date}
            </p>

            <p className="ms-2 text-xl py-2 text-gray-900 dark:text-white">
              <span className="font-bold">IMDB Code:</span>{" "}
              <a
                href={`https://www.imdb.com/title/${data.imdb_id}`}
                target="_blank"
                rel="noreferrer"
               
                className="text-black-600 dark:text-blue-400"
              >
                {data.imdb_id}
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
