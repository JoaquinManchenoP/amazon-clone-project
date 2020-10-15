import React from "react";
import "./advertisment.css";

export default function Advertisment(props) {
  return (
    <div className="movie">
      <div className="ad__title">
        <strong>Recently Viewed</strong>
      </div>

      <img src="https://m.media-amazon.com/images/M/MV5BZWJiZTE4NWEtNWFiMC00YjI5LWFiODMtN2JmNzA4ODMwMjNlXkEyXkFqcGdeQXVyMTA3NTEwMzgy._V1_.jpg"></img>

      <div className="history__link">
        <p>Edit your browser history</p>
      </div>
    </div>
  );
}
