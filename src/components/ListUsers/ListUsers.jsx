import { Card, Button } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { getUserInfo, deleteUser } from '../../api/users.api';

export const ListUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      try {
        const usersData = await getUserInfo();
        setUsers(usersData);
      } catch (error) {
        console.error('Error al cargar usuarios:', error);
      }
    }
    loadUsers();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      await deleteUser(userId);
      setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
    }
  };

  return (
    <Card className="w-96 ml-4 mb-4">
      <div>
        {users.map(user => (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <Button onClick={() => handleDeleteUser(user.id)}>Eliminar</Button>
          </div>
        ))}
      </div>
    </Card>
  );
};
