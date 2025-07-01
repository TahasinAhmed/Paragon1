import { useState } from 'react'
import ParagonHero from '../assets/ParagonLogo2.png'

function Hero() {
  const [count, setCount] = useState(0)

  return (
    <div class="py-10 px-20 flex justify-center"> 
      <img src={ParagonHero} alt="Paragon Logo"   className='rounded-lg'/>
    </div>
    )
}

export default Hero