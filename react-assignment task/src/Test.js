import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Test = () => {
  const [states,setStates]=useState([])
  const fetchStates=async()=>{
    try{
      const response=await axios.get('https://api.minebrat.com/api/v1/states')
      setStates(response.data)
    }
    catch(err){
      console.log('failed to fetch',err)
    }
  }
  // useEffect(()=>{
  //   axios.get('https://api.minebrat.com/api/v1/states')
  //   .then(response=>response.data)
  //   .then(data=>setStates(data))
  // },[])
  useEffect(()=>{
    fetchStates()
  },[])
  // const fetchStates=async()=>{
  //   try{
  //     const response=await fetch('https://api.minebrat.com/api/v1/states')
  //     const data=await response.json()
  //     setStates(data)
  //   }catch(err){
  //     console.log('error fetching',err)
  //   }
  // }
  return (
    <div>
    <pre>{JSON.stringify(states)}</pre>
      {
        states.map((state)=>{
          return(
            <div>
              <li key={state.id}>{state.name}</li>
            </div>
          )
        })
      }
    </div>
  )
}

export default Test