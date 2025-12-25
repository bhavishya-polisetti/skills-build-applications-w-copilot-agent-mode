import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    // Example Codespace URL: https://$CODESPACE_NAME-8000.app.github.dev/api/teams/
    const API_BASE = process.env.REACT_APP_CODESPACE_NAME
      ? `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev`
      : (process.env.REACT_APP_API_BASE || 'http://localhost:8000');
    fetch(`${API_BASE}/api/teams/`)
      .then(r => r.json())
      .then(setTeams)
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2>Teams</h2>
      <ul className="list-group">
        {teams.map(t => (
          <li className="list-group-item" key={t.id}>{t.name} ({t.members.length} members)</li>
        ))}
      </ul>
    </div>
  );
}

export default Teams;
