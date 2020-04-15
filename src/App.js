import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min';
import './App.css';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';

const App = () => {
  useEffect(() => {
    // Initialize Materialize JS
    M.AutoInit();
  });
  return (
    <div>
      <SearchBar />
      <div className="container">
        <Logs />
      </div>
    </div>
  );
};

export default App;
