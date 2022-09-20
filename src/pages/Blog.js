import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {mydata} from '../mydata'
import './Style.css'
const Blog = () => {
    const[list,setlist]=useState(mydata)

    const truncate=(str,num)=>{
        if(str.length > num){
            return str.slice(0,num)+'...'
        }else {
            return str
        }
    }
  
  return (
    <div>
         <h1>hello i am blog component</h1>
            <section>
                {list.map((item)=>{
                    const {id,title,body}=item
                    return <article key={id}>
                        <h1>{title}</h1>
                        <h3>{truncate(body,100)}</h3>
                        <Link to={title} state={{id,title,body}}>Lern more</Link>
                    </article>
                })}
            </section>
   
    </div>
  )
}

export default Blog