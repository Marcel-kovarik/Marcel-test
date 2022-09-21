import React, { createContext, useContext, useState } from 'react'

export const EventContext = createContext()

export const EventProvider = ({ children }) => {
  const [event, setEvent] = useState({});

  const updateEvent = (data) => {
    setEvent(data);
  }

  const initEvent = () => {
    setEvent({});
  }

  const functions = {
    updateEvent,
    initEvent
  }

  return (
    <EventContext.Provider value={[event, functions]}>
      {children}
    </EventContext.Provider>
  )
}

export const useEvent = () => {
  const eventManager = useContext(EventContext)
  return eventManager || [{}, () => { }]
}