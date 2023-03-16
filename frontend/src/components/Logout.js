import React from 'react'
import {useEffect} from 'react';
import {
  useNavigate
} from "react-router-dom";
const Logout = () => {
  const navigate = useNavigate()
    const clearLocalStorage = ()=>{
        console.log("logout")
        localStorage.removeItem("userInfo");
        navigate("/")
        window.location.reload(false);
    };
    useEffect(() => {
     clearLocalStorage()
    })
    
  return (
    <><div>logout</div></>
  )
}

export default Logout