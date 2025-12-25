import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch('/api/activities/')
      .then(r => r.json())
      .then(setActivities)
      .catch(console.error);
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
