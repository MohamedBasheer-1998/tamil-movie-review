import React from "react";
import { useParams } from "react-router-dom";
import movies from "../data/movies";

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) return <div style={{ padding: "1rem" }}>Movie not found</div>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{movie.title}</h2>
      <p><strong>Release Date:</strong> {movie.releaseDate}</p>
      <p>{movie.description}</p>
      <h3>Reviews</h3>
      {movie.reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <ul>
          {movie.reviews.map((review, idx) => (
            <li key={idx}><strong>{review.user}:</strong> {review.comment}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieDetails;
