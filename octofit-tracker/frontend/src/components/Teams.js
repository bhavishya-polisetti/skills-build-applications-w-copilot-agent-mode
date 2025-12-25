import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch('/api/teams/')
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
