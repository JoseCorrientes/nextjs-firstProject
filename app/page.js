import react from "react"
import Users from "../components/Users.jsx";

async function fetchUsers() {
    const res = await fetch("https://reqres.in/api/users")
    const data = await res.json()
    return data.data;
}


async function IndexPage () {
  const users = await fetchUsers()  
  console.log( users);  

  return (
        <Users 
        data={users}/>


    )

}

export default IndexPage;