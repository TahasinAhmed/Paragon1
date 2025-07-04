import { useState } from 'react'
import ParagonHero from '../assets/ParagonLogo2.png'

function Hero() {
  const [count, setCount] = useState(0)

  return (
    <div className="py-10 px-10 flex justify-center"> 
      <img src={ParagonHero} alt="Paragon Logo"   className='rounded-4xl w-400'/>
    </div>
    )
}

export default Hero