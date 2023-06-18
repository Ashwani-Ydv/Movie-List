import React, { useState } from "react";
import ReactDOM from "react-dom";
import MovieList from "./components/MovieList";
import "./app.css";

const App = () => {
  return (
    <div className="app">
      <div className="movielist">
        <h1>Movie List</h1>
      </div>
      <MovieList />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
