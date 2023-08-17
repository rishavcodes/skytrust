import { useEffect, useState } from 'react'
import UserData from './components/UserData.js'
import Navbar from './components/Navbar.js';


const API = "https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=%2020";

const App = () => {

  const [users, setUsers] = useState([])

    const fetchApiData = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.results?.length > 0) {

                setUsers(data.results ?? [])
            }
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
      fetchApiData(API)
    }, [])


  return (
    <>
      <Navbar />
      <UserData users={users} />
    </>
  )
}

export default App