import React from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
// import About from './components/About'

const App = () => {
  return (
    <>
  <Navbar title="TextUtils"/>

  <div className='container my-3'>
  <TextForm heading="Add text here to Analyze"/>
  {/* <About/> */}
  </div>
  
  </>
  )
}
export default App
