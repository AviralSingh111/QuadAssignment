// ShowDetails.jsx

import React, { useState, useEffect } from 'react';

const ShowDetails = ({ match }) => {
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${match.params.id}`);
        const data = await response.json();
        setShow(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching show details:', error);
        setLoading(false);
      }
    };

    fetchShowDetails();
  }, [match.params.id]);

  return (
    <div className="container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="show-item">
          <h1 className="show-title">{show.name}</h1>
          <p className="show-summary">{show.summary}</p>
          {/* Display more details about the show as needed */}
        </div>
      )}
    </div>
  );
};

export default ShowDetails;
