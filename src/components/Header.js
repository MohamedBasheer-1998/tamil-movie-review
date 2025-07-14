import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <header className="header">
    <div className="header-container">
      <h1><Link to="/">Moviesda Tamil</Link></h1>
      <nav className="year-menu">
        {["2025", "2024", "2023", "2022", "2021", "2020"].map(year => (
          <Link key={year} to={`/year/${year}`}>{year}</Link>
        ))}
      </nav>
    </div>
  </header>
);

export default Header;
