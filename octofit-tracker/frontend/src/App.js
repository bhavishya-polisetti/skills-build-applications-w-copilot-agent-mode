import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <div className="container mt-4">
      <header>
        <h1>OctoFit Tracker</h1>
        <nav>
          <ul className="nav nav-pills">
            <li className="nav-item"><Link className="nav-link" to="/activities">Activities</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/leaderboard">Leaderboard</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/teams">Teams</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/users">Users</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/workouts">Workouts</Link></li>
          </ul>
        </nav>
      </header>
      <main className="mt-4">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={<Activities />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
