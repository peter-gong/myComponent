import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  login: string;
}

const Users = () => {
  const [users, setUsers] = useState<Array<User>>([]);
  useEffect(() => {
    axios.get('/api/users').then(res => {
      setUsers(res.data);
    });
  }, []);
  return (
    <>
      <ul>
        {users.map(item => (
          <li key={item.login}>{item.login}</li>
        ))}
      </ul>
    </>
  );
};

export default Users;
