import React from 'react'
import { useNavigate } from 'react-router-dom'
const Contact = () => {
    const mynavigate= useNavigate()
  return (
    <div>
            <h1>hello i am contact component</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, 
            amet accusantium. Tenetur impedit blanditiis, velit quia debitis est similique corporis,
             dolorum praesentium sunt ipsa consequatur nihil esse necessitatibus adipisci facere.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam rem odio aliquid molestiae
             et cum aspernatur repellendus blanditiis ea, voluptatem minus facere,
             dignissimos magnam sit animi eius voluptate! Iure, nobis.
        </p>
        <button onClick={(()=>{mynavigate('/')})}>Go to home page</button>
    </div>
  )
}

export default Contact