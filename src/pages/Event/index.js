import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { Event as EventController } from '../../components/Event'

export const Event = () => {
  return (
    <>
      <HelmetTags page='home' />
      <EventController/>
    </>
  )
}
