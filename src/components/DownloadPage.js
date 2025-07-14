import React from "react";
import { useParams, Link } from "react-router-dom";
import "./DownloadPage.css";

const qualities = ["360p", "720p", "1200p"];

const DownloadPage = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find(m => m.id.toString() === id);
  if (!movie) return <p className="error">Movie not found.</p>;

  return (
    <div className="download-page container">
      <h2>Download: {movie.title}</h2>
      <div className="qualities">
        {qualities.map(q => (
          <Link key={q} to={`/download/${id}/${q}`} className="quality-card">
            <div className="quality-label">{q}</div>
            <div className="quality-desc">Download in {q}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DownloadPage;
