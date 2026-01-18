import React from 'react'
import MainCarosal from '../../components/HomeCarosal/MainCarosal'
import HomeSectionCarosal from '../../components/HomeSectionCarosal/HomeSectionCarosal'
import { chains } from '../../data/chains'
import { bracelets } from '../../data/bracelet'
import Footer from '../../components/Footer/Footer'

const HomePage = () => {
  return (
    <div className='mt-0'>
        <MainCarosal />
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
          <HomeSectionCarosal data={chains} sectionName={"Chains"} />
          <HomeSectionCarosal data={chains} sectionName={"Men's Bali"} />
          <HomeSectionCarosal data={chains} sectionName={"Rings"} />
          <HomeSectionCarosal data={chains} sectionName={"Kada"} />
          <HomeSectionCarosal data={bracelets} sectionName={"Bracelets"}/>
          <HomeSectionCarosal data={bracelets} sectionName={"Rudraksh"}  />
        </div>  
        <div>
            <Footer/>
        </div>
      
    </div>
  )
}

export default HomePage
