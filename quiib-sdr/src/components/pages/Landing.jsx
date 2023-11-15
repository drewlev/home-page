import { useState } from 'react'
import Nav from '../nav'
import Header from '../header'
import Why from '../why'
import HowItWorks from "../how"
import "./Landing.css"


function Landing() {
  const [count, setCount] = useState(0)

  return (
    <div className='Landing'>

      <Nav/>
      <Header/>
      <HowItWorks/>
      <Why/>
      <div className='light-box'>   
      </div>
    </div>
  )
}

export default Landing
