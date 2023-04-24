import React from 'react'
import NotFoundImg from '../assets/NotFoundImg.png';

const NotFound = () => {
  return (
    <>
      <h1>Error Page Not Found</h1>
      <p>"Uh Oh! It looks like something is out of place".</p>
      <img src={NotFoundImg} className='not-found' />
    </>
  )
}

export default NotFound