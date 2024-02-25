import React from 'react'
import s from './LinkButtonMobile.module.css'
import { Link } from 'react-router-dom'


export default function LinkButtonMobile({buttonText,link }) {
  return (
    < >
        <Link to={link}>
        <button className={s.linkButtonMobile}>{buttonText} </button>
       </Link>
            
    </>
  )
}
