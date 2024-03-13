import { Card } from '@material-tailwind/react'
import {useEffect, useState} from 'react'
import {getAllUsers} from '../../api/users.api'

export const ListUsers = () => {

  const  [users, setUsers] = useState([])
  useEffect(() => {
    async function loadUsers(){
      const res = await  getAllUsers();
      console.log(res)
      setUsers(res.data)
    }
    loadUsers()
  },[])
  return (
    
    <Card className="w-96 ml-4 mb-4">
      <div>
        {users.map(user => (
          <div key={user.id}>
            <h1>{user.name}</h1>
          </div>
        ))}
      </div>

    </Card>

  )
}
