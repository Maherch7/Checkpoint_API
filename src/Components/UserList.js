import axios from "axios"
import { useEffect, useState } from "react"




const UserList=()=>{
    const [users,setUsers] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>setUsers(res.data))
        .catch((err)=>console.log(err))
    },[])
    return(
        <div>
            {
                users.map((el,i,t)=><h2>{el.name}</h2>)
            }
        </div>
    )
}

export default UserList