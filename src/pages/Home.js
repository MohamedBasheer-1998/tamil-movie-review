// pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const categories = [
  { id: "2025", title: "Tamil 2025 Movies" },
  { id: "2024", title: "Tamil 2024 Movies" },
  { id: "2023", title: "Tamil 2023 Movies" },
  { id: "2022", title: "Tamil 2022 Movies" },
  { id: "2021", title: "Tamil 2021 Movies" },
  { id: "2020", title: "Tamil 2020 Movies" },
  { id: "collection", title: "Tamil Movies Collection" },
  { id: "hd", title: "Tamil HD Mobile Movies" },
  { id: "isaimini", title: "isaimini Latest Movies" },
  { id: "dubbed", title: "Tamil Dubbed Movies" },
  { id: "moviesda2025", title: "Moviesda 2025 Tamil Movies" },
  { id: "moviesda2024", title: "Moviesda 2024 Tamil Movies" },
  { id: "tamilrockers", title: "Tamilrockers MP4 Movies" }
];

const Home = () => {
  return (
    <div className="home">
      <h1>🎬 Tamil Movie Categories</h1>
      <ul className="category-list">
        {categories.map(cat => (
          <li key={cat.id}>
            <Link to={`/year/${cat.id}`} className="category-link">
              {cat.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
