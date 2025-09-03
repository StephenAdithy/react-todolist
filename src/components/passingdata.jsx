import React, { useContext } from 'react'
import Details from './details';

const passingdata = ({data}) => {


  return (
    <>
    <Details name = {data.name} age = {data.age}/>
    </>
  )
}

export default passingdata