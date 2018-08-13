import React from 'react'
import '../styles/landing.css'

const Landing = () => {
  return (
    <div className='landing'>
      <h1>RENDER ME HEALTHY</h1>
      <h3>
        The fast & easy way to build healthy menus for you and your family!
      </h3>
			<a href="/auth/google"><button>Get Started</button></a>
    </div>
  )
}

export default Landing
