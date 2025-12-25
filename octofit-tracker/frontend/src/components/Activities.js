import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch('/api/activities/')
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
