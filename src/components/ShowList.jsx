// ShowList.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const ShowList = ({ shows }) => (
  <ul className="container">
    {shows.map((show) => (
      <li key={show.show.id} className="show-item">
          {show.show.image && (
          <img src={show.show.image.medium} alt={show.show.name} className="show-image" />
        )}
        <h2 className="show-title">{show.show.name}</h2>
        <h4>Score - {show.score}</h4>
        <Link to={`/show/${show.show.id}`} target="_blank">
          <button>View Details</button>
        </Link>
      </li>
    ))}
  </ul>
);

export default ShowList;
