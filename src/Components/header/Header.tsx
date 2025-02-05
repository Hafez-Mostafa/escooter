import React from 'react'
// import Navbar from '../navbar/Navbar'
import style from './header.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
        <header className={style.header}>
        {/* <Navbar/> */}
        <div className={style.auth}>
            <button className={style.auth_btn}><Link href='/login'>Login</Link></button>
            <button className={style.auth_btn}><Link href='/signup'>Signup</Link></button>

        </div>

        </header>
        </div>
  )
}

export default Header