import React from 'react'
import { Notes } from './';

const Home = (props) => {
  return (
    <>
      <div className="flex flex-col items-center gap-8">
        <Notes showAlert={props.showAlert} />
      </ div>
    </>
  )
}

export default Home;