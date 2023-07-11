import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
      <div className='navbar'>
          <div className='logo'><Link to={'/home'}><img alt='logo' className='image' src={require('../images/logo.png')}></img></Link>
          </div>
        {/* <Link to={'/checkout'}><button className='button'>Order</button></Link> */}
        <Link to={'/'}><button className='button'>Sign In</button></Link>
      </div>
  )
}
