import React from "react";
import { useParams } from "react-router-dom";
import movies from "../data/movies";
import MovieCard from "../components/MovieCard";

const YearPage = () => {
  const { year } = useParams();
  const filtered = movies.filter(m => m.releaseDate.startsWith(year));

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{year} Tamil Movies</h2>
      {filtered.length === 0
        ? <p>No movies found for {year}.</p>
        : filtered.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
};

export default YearPage;
