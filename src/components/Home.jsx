import React from 'react'
import { Notes } from './';

const Home = () => {
  return (
    <>
      <h5>This is Homepage</h5>
      <div className="flex flex-col items-center gap-8">
        <Notes />
      </ div>
    </>
  )
}

export default Home;