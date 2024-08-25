// src/App.js
import React from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Dashboard />
    </div>
  );
};

export default App;
