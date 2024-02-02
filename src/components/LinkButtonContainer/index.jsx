import React from 'react'
import s from './LinkButtonContainer.module.css'

export default function LinkButton({title, buttonText}) {
  return (
          <div className={s.linkButtonContainer} >
            
            <p className={s.title}>{title}</p>
            <div className={s.greyLane}></div>
          </div>
  
  )
}
