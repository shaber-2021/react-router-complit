import React from 'react'
import { useState } from 'react'
import {useSearchParams } from 'react-router-dom'

const User = () => {
    const[search,setsearch]=useSearchParams()
    const[name,setname]=useState('')
    const[age,setage]=useState('')
    // console.log(search.get('id'))
  return (
    <div>
        <h1>user : </h1>
        <form onSubmit={((e)=>{e.preventDefault();setsearch({name:name, age:age})})}>
        <input type="text" placeholder='name'
            value={name} onChange={((e)=>{setname(e.target.value)})} />
            <input type="text" placeholder='age'
            value={age} onChange={((e)=>{setage(e.target.value)})} />
  
            <button type='submit'>find user</button>
        </form>

        {/* <h1>{search.get('id')}</h1>
        <h1>{search.get('age')}</h1>
        <h1>{search.get('name')}</h1> */}
    </div>
  )
}

export default User