import "./Home.css"
import { Sidebar } from '../Sidebar/Sidebar'
import { Main } from '../Main/Main'

export const Home = () => {
  return (
    <div className='background'>
        <Sidebar/>
        <Main/>
    </div>
  )
}
