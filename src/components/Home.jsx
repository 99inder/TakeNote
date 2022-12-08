import React from 'react'
import { Notes } from './';

const Home = () => {
  return (
    <>
      <h1>This is Homepage</h1>
      <div className="flex flex-col items-center gap-8">
        <Notes />
      </ div>
    </>
  )
}

export default Home;