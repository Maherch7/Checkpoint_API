import axios from "axios"
import { useEffect, useState } from "react"
import CardList from "./CardList"
import Spinner from 'react-bootstrap/Spinner';




const UserList=()=>{
    const [users,setUsers] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>setUsers(res.data))
        .then(()=>setLoading(false))
        .catch((err)=>console.log(err))
    },[])
    return(
        <div className="cards">
            {   loading === true ?
            
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
                </Spinner>
                :
                users.map((el,i,t)=><CardList el={el}/>)
            }
        </div>
    )
}

export default UserList