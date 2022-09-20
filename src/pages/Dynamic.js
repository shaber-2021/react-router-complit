import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { mydata } from '../mydata';
import { useLocation } from 'react-router-dom';

const Dynamic = () => {
    const location = useLocation();
    // console.log(location)
    const {title} = useParams();
    // const[bodydata,setbodydata]=useState('');
    // useEffect(()=>{
    //    const mybody = mydata.filter((data)=>data.title===title)
    //    setbodydata(mybody[0].body)
    // },[])
  return (
    <div>
        <h1>{title} page</h1>
        <h3>{location.state.body.slice(0,300)}</h3>
        <h3>{location.state.body.slice(301,600)}</h3>
    </div>
  )
}

export default Dynamic