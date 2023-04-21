import React from 'react'
import Icon from "../assets/Icon.png"

const Footer = () => {
  return (
    <div className='footer'>
      <img style={{ width: 75, height: 50 }} src={Icon} alt='photo of logo icon' className='header-logo'/>  © 2023 Blurred Limes | <a style={{color:"#203611"}} href='https://github.com/marilynremigio'>Marilyn Remigio</a> | <a style={{color:"#203611"}} href='https://github.com/tammytran96'>Tammy Tran</a> | <a style={{color:"#203611"}} href='http://github.com/Manflo27'>Manny Flores</a> | <a style={{color:"#203611"}} href='https://github.com/Ronnie455'>Ronnie Maynard</a>
    </div>
  )
}

export default Footer