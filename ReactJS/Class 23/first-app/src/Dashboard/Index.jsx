import Navbar from './Navbar' 
import Section from './Section'
import React from 'react'
import './task1Style.css'

function Task1 () {
  return (
    <div>
      <Navbar/>
      <Section columns={4}/>
      <Section columns={2}/>
      <Section columns={3}/>
    </div>
  )
}

export default Task1