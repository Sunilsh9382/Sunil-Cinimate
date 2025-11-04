import { useState, useEffect } from "react";

export const useFetchMovies = (apiPath,queryTerm=" ") => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_URL = process.env.REACT_APP_BASE_URL;

  const [data, setData] = useState([]);

  const url = `${API_URL}/${apiPath}?api_key=${API_KEY}&query=${queryTerm}`;

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    }

    fetchMovies();
  }, [url]);

  return { data };
};
