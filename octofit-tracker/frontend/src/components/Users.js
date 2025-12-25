import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // Example Codespace URL: https://$CODESPACE_NAME-8000.app.github.dev/api/users/
    const API_BASE = process.env.REACT_APP_CODESPACE_NAME
      ? `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev`
      : (process.env.REACT_APP_API_BASE || 'http://localhost:8000');
    fetch(`${API_BASE}/api/users/`)
      .then(r => r.json())
      .then(setUsers)
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul className="list-group">
        {users.map(u => (
          <li className="list-group-item" key={u.id}>{u.username} &lt;{u.email}&gt;</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
