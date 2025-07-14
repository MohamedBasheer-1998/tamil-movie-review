import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import YearPage from "./pages/YearPage";
import DownloadPage from "./components/DownloadPage";
import QualityDetailPage from "./components/QualityDetailPage";
import FinalDownloadPage from "./components/FinalDownloadPage";
import movies from "./data/movies";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/year/:year" element={<YearPage />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/download/:id" element={<DownloadPage movies={movies} />} />
  <Route path="/download/:id/:quality" element={<QualityDetailPage movies={movies} />} />
  <Route path="/watch/:id/:quality" element={<FinalDownloadPage movies={movies} />} />
      </Routes>
    </Router>
  );
}

export default App;
