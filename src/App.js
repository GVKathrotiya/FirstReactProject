import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import {Link, Routes} from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AddClient from './AddClient';
import ClientList from './ClientList';


const App = () => {
  return (
      <Router>
          <div className="container">
              <Routes>
                  <Route path="/" element={<ClientList />} />
                  <Route path="/addCategory" element={<AddClient />} />
              </Routes>
          </div>
      </Router>
  );
};

export default App;
