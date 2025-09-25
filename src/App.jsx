
import './App.css'
import BallCount from './Components/BallCounter/BallCount'
import Counter from './Components/Counter/Counter'
import Runcount from './Components/RunCounter/Runcount'
import { Suspense, useState } from 'react'
import Users from './Components/Users/Users'
import Friends from './Components/Friends/Friends'
import TextToggle from './Components/TextToggling/TextToggle'



const fetchFriends = async() =>{
        const friendsData = await fetch('https://dummyjson.com/users')
        return friendsData.json()
      }

function App() {

    const [text, setText] = useState(true)

    const handleToggle = () =>{
      setText(!text)
    }

    const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
      .then((res)=>res.json())

      const friendsPromise = fetchFriends()

  return (
    <div>

      <TextToggle text={text} handleToggle={handleToggle}></TextToggle>
      <Counter></Counter>
      <Runcount></Runcount>
      <BallCount></BallCount>
      <Suspense fallback={<h3>Loading....</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Suspense fallback={<h3>Data is on the way......</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

    </div>
  )
}

export default App
