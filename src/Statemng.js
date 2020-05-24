import React, { useState, createContext } from 'react'

export const Covidcontext = createContext()

export const CovidProvider = props => {
  const [covid, setCovid] = useState('')
  return (
    <Covidcontext.Provider value={[covid, setCovid]}>
      {props.children}
    </Covidcontext.Provider>
  )
}
