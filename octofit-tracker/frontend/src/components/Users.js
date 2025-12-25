import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('/api/users/')
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
