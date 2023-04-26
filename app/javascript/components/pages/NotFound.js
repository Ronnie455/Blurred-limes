import React from 'react'
import NotFoundImg from '../assets/NotFoundImg.png';

const NotFound = () => {
  return (
    <>
      <h1>Uh Oh! It looks like something is out of place.</h1>
      <img src={NotFoundImg} className='not-found' />
    </>
  )
}
export default NotFound