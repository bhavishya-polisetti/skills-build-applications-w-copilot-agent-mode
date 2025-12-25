import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    // Example Codespace URL: https://$CODESPACE_NAME-8000.app.github.dev/api/activities/
    const API_BASE = process.env.REACT_APP_CODESPACE_NAME
      ? `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev`
      : (process.env.REACT_APP_API_BASE || 'http://localhost:8000');
    fetch(`${API_BASE}/api/activities/`)
      .then(r => r.json())
      .then(setActivities)
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2>Activities</h2>
      <ul className="list-group">
        {activities.map(a => (
          <li className="list-group-item" key={a.id}>{a.user.username} - {a.activity_type} ({a.duration_minutes} min)</li>
        ))}
      </ul>
    </div>
  );
}

export default Activities;
