import React from 'react'
import { addingcontext } from '../App'

const footer = () => {
    
  return (
    <div>
        <h1>Footer of the page</h1>
        <addingcontext.Consumer>
            {({stud})=>{
                return <p>Hence proved by {stud.name}</p>
            }}
        </addingcontext.Consumer>
    </div>
  )
}

export default footer