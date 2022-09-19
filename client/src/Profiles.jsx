import React , { useEffect, useState }from 'react'
import axios from "axios"

function Profiles() {
    const [profiles,setprofiles]=useState([]);

    useEffect(()=>{
        axios.get('/profile/get')
        .then((res)=>{
            setprofiles(res.data)
            console.log(res.data)
        })
        .catch((err)=>{
            console.log("ERR",err)
        })
    },[])
  return (
    <div>
        {profiles?profiles.map((x)=>{
            return <h2 key={x.Name}>{x.Name},{x.Email}</h2>
        }):null}
    </div>
  )
}

export default Profiles