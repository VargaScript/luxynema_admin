import { Card } from '@material-tailwind/react'
import { useEffect, useState} from 'react'
import {getAllMovies} from '../../api/listmovies.api'


export const ListMovies = () => {
    const [lists, setLists] = useState([]);

  useEffect(() => {
    async function loadMovies(){
      const res = await  getAllMovies();
      setLists(res.data)
      console.log(res)
    }
    loadMovies()
    
  },[])
  return (
    
    <Card className="w-96 ml-4 mb-4">

      <div>
        <h1>Movies Here:</h1>
        <br />
        {lists.map(list => (
          <div key={list.id}>
            <h1>{list.title}</h1>
            <img src={list.url_poster} alt={list.title}/>
          </div>
        ))}
      </div>

    </Card>

  )
}





