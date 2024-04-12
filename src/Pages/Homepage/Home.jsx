import React from 'react'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'
import bg1 from "../../assets/bg1.jpg"

const Home = () => {
  return (
    <div className='mt-[112px] z-30 md:mt-[168px]'>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </div>
  )
}

export default Home
