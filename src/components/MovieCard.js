import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <h3>{movie.title}</h3>
    <p><strong>Release:</strong> {movie.releaseDate}</p>
    <p>{movie.description.slice(0, 100)}...</p>
    
    <div className="movie-card-buttons">
      <Link to={`/movie/${movie.id}`} className="btn-read">Read More</Link>
      <Link to={`/download/${movie.id}`} className="btn-download">Download</Link>
    </div>
  </div>
);

export default MovieCard;
