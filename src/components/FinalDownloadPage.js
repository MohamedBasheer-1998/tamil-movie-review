import React from "react";
import { useParams } from "react-router-dom";
import "./FinalDownloadPage.css";

const streamingLinks = {
  "1": {
    "360p": {watch:"https://netflix.com/abc", download:"https://cdn.example.com/movie360.mp4"},
    "720p": {watch:"https://amazon.com/def", download:"https://cdn.example.com/movie720.mp4"},
    "1200p": {watch:"https://hotstar.com/ghi", download:"https://cdn.example.com/movie1200.mp4"}
  },
};

const FinalDownloadPage = ({ movies }) => {
  const { id, quality } = useParams();
  const movie = movies.find(m => m.id.toString() === id);
  const links = streamingLinks[id]?.[quality];
  if (!movie || !links) return <p className="error">Not found.</p>;

  return (
    <div className="watch-page container">
      <h2>{movie.title} — {quality}</h2>
      <div className="actions">
        <a href={links.watch} target="_blank" rel="noopener noreferrer" className="btn-watch">▶ Watch Online</a>
        <a href={links.download} className="btn-download">⬇ Download File</a>
      </div>
    </div>
  );
};

export default FinalDownloadPage;
