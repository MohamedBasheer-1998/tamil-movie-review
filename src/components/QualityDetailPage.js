import React from "react";
import { useParams, Link } from "react-router-dom";
import "./QualityDetailPage.css";

const fileSize = {"360p":"350 MB","720p":"936.93 MB","1200p":"1.8 GB"};

const QualityDetailPage = ({ movies }) => {
  const { id, quality } = useParams();
  const movie = movies.find(m => m.id.toString() === id);
  if (!movie || !fileSize[quality]) return <p className="error">Not found.</p>;

  return (
    <div className="quality-page container">
      <div className="detail-card">
        <h2>{movie.title} – {quality}</h2>
        <p><strong>File Size:</strong> {fileSize[quality]}</p>
        <p><strong>Format:</strong> MP4</p>
        <Link to={`/watch/${id}/${quality}`} className="btn-next">Proceed →</Link>
      </div>
    </div>
  );
};

export default QualityDetailPage;
