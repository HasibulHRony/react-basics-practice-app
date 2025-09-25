
import './App.css'
import BallCount from './Components/BallCounter/BallCount'
import Counter from './Components/Counter/Counter'
import Runcount from './Components/RunCounter/Runcount'
import { Suspense, useState } from 'react'
import Users from './Components/Users/Users'
import Friends from './Components/Friends/Friends'
import TextToggle from './Components/TextToggling/TextToggle'
import DummyUsers from './Components/DumyUsers/DummyUsers';



const fetchFriends = async() =>{
        const friendsData = await fetch('https://dummyjson.com/users')
        return friendsData.json()
      }

const fetchDummyUsers = async() =>{
  const dummyUsersData = await fetch('https://api.escuelajs.co/api/v1/users')
  return dummyUsersData.json()
}

function App() {

    const [text, setText] = useState(true)

    const handleToggle = () =>{
      setText(!text)
    }

    const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
      .then((res)=>res.json())

      const friendsPromise = fetchFriends()

      const dummyUsersPromise = fetchDummyUsers()

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

      <Suspense fallback={<h3>Loading...</h3>}>
        <DummyUsers dummyUsersPromise={dummyUsersPromise}></DummyUsers>
      </Suspense>

    </div>
  )
}

export default App
