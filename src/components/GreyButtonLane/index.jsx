import React from 'react'
import s from './GreyButtonLane.module.css'
import LinkButton from '../../ui/Buttons/LinkButton'

export default function GreyButtonLane({title}) {
  return (
    <div>
          <div className={s.linkButtonContainer} >
           
            <h2 className={s.title}>{title}</h2>
              <div className={`${s.greyLane} wrapper_All`}></div>
           
          </div>
     </div>
  )
}
