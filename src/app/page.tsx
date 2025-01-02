import BestofAirMax from '@/components/BestofAirMax'
import Dontmiss from '@/components/Dontmiss'
import Essentials from '@/components/Essentials'
import Featured from '@/components/Featured'
import Footer from '@/components/Footer'
import GearUp from '@/components/GearUp'
import HeroSection from '@/components/HeroSection'
import List from '@/components/List'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
  
     <HeroSection />
     <BestofAirMax />
     <Featured />
     <GearUp />
     <Dontmiss />
     <Essentials />
     <List />
    </div>
  )
}

export default page
