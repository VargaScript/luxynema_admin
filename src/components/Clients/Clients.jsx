import { Card } from '@material-tailwind/react'
import {React, useEffect} from 'react'
import {getAllClients} from '../../api/clients.api'


export const Clients = () => {
  useEffect(() => {
    async function loadClients(){
      const res = await  getAllClients();
      console.log(res)
    }
    loadClients()
  },[])
  return (
    
    <Card className="w-96 ml-4 mb-4">
      <div>Clients</div>

    </Card>

  )
}
