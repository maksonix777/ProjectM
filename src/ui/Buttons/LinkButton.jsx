import React from 'react'
import s from './LinkButton.module.css'
import { Link } from 'react-router-dom'

export default function LinkButton({buttonText,link }) {
  return (
    <div >
        <Link to={link}>
        <button className={s.linkButton}>{buttonText}</button>
      </Link>
            
    </div>
  )
}
