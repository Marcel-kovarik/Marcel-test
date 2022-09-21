import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { Create as CreateController } from '../../components/Create'

export const Create = () => {
  return (
    <>
      <HelmetTags page='home' />
      <CreateController/>
    </>
  )
}
