import React from 'react'
import Header from './Header'
import Logins from './Logins'

function SectionOne() {
  return (
    <div className='section-one'>
      <Header />
      <Logins />
      <div className='bottom'>
        <div className="line"></div>
        <div className="or">or</div>
        <div className="line"></div>
      </div>
    </div>
  )
}

export default SectionOne