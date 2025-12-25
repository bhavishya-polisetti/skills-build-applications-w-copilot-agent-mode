import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    // Example Codespace URLs:
    // activities: https://$CODESPACE_NAME-8000.app.github.dev/api/activities/
    // leaderboard: https://$CODESPACE_NAME-8000.app.github.dev/api/leaderboard/
    const API_BASE = process.env.REACT_APP_CODESPACE_NAME
      ? `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev`
      : (process.env.REACT_APP_API_BASE || 'http://localhost:8000');

    // Prefer a dedicated leaderboard endpoint if available, otherwise fall back to activities
    fetch(`${API_BASE}/api/leaderboard/`)
      .then(res => {
        if (!res.ok) throw new Error('no leaderboard endpoint');
        return res.json();
      })
      .then(data => {
        // Expecting data to be array of { user, calories }
        if (Array.isArray(data)) {
          // Convert to activities-like rows for rendering
          const rowsFromLeaderboard = data.map(item => [item.user, item.calories]);
          // Use synthetic activities state to render using existing logic
          setActivities(rowsFromLeaderboard.map((r, i) => ({ id: i, user: { username: r[0] }, calories: r[1] })));
          return;
        }
        throw new Error('unexpected leaderboard format');
      })
      .catch(() => {
        // Fallback: fetch activities and compute totals in UI
        fetch(`${API_BASE}/api/activities/`)
          .then(r => r.json())
          .then(setActivities)
          .catch(console.error);
      });
  }, []);

  const totals = activities.reduce((acc, a) => {
    acc[a.user.username] = (acc[a.user.username] || 0) + (a.calories || 0);
    return acc;
  }, {});

  const rows = Object.entries(totals).sort((a,b) => b[1]-a[1]);

  return (
    <div>
      <h2>Leaderboard (by calories)</h2>
      <ol>
        {rows.map(([user,cals]) => <li key={user}>{user}: {cals} cal</li>)}
      </ol>
    </div>
  );
}

export default Leaderboard;
