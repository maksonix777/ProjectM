import React from 'react'
import s from './GreyButtonLane.module.css'
import LinkButton from '../../ui/Buttons/LinkButton'

export default function GreyButtonLane({title, buttonText}) {
  return (
    <div className={`${s.wrapper} s.wrapper_Small`}>
          <div className={s.linkButtonContainer} >
           
            <h2 className={s.title}>{title}</h2>
            <div className={s.greyLane}></div>
           
          </div>
     </div>
  )
}
