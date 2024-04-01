import React, { useContext, useEffect } from 'react'
import { resortContext } from '../context/resortContext'
import { userContext } from '../context/userContext';
import ResortListForOwner from './ResortListForOwner';
import { useNavigate } from 'react-router-dom'

export default function Owner() {
  const { getResortByOwnerId, resorts } = useContext(resortContext);
  const { userLogin } = useContext(userContext);
  const navigate = useNavigate();

  useEffect(() => {
    getResortByOwnerId(userLogin.id);
  }, [])
  console.log(resorts,userLogin);
  return (
    <div>
    <button onClick={()=>{navigate("/formResort")}}>להוספת אתר נופש חדש</button>
      <h1>my resorts</h1>
      {resorts.map((resort) => 
        <ResortListForOwner resort={resort} />
      )}

    </div>
  )
}
