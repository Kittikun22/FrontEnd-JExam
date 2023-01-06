import React from 'react'
import HomeBanner from '../components/home-components/HomeBanner'
import Appbar from '../components/Appbar'
import HomeLinkJknowShop from '../components/home-components/HomeLinkJknowShop'
import Footer from '../components/home-components/Footer'

function Home() {
  
  return (
    <>
      <Appbar />
      <HomeBanner />
      <HomeLinkJknowShop/>
      <Footer/>
    </>
  )
}

export default Home