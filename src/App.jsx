import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';
import './App.css'
const App = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
        const data = await response.json();
        setShows(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div>
        <h1 className="container">TV Shows</h1>
        <Switch>
          <Route exact path="/" render={() => <ShowList shows={shows} />} />
          <Route path="/show/:id" component={ShowDetails} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
