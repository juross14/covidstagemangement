import React from 'react'
import './styles.css'
import Nav from './Nav'
import SearchBarFetch from './SearchBarFetch'
import { CovidProvider } from './Statemng'

export default function App() {
  return (
    <CovidProvider>
      <div className="App">
        <Nav />
        <SearchBarFetch />
      </div>
    </CovidProvider>
  )
}
