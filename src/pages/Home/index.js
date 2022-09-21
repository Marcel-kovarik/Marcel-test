import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { Home as HomeController } from '../../components/Home'

export const Home = () => {
  return (
    <>
      <HelmetTags page='home' />
      <HomeController/>
    </>
  )
}
