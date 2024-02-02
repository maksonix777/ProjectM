import React from 'react'
import notFoundPage from '../../media/notfoundpage.jpg'
import s from "./NotFoundPage.module.css" 
import { Link } from 'react-router-dom'
import ButtonCard from '../../ui/Buttons/ButtonCard'

export default function NotFoundPage() {
  
  return (
  <div className={s.notFoundPageContainer}>NotFoundPage
      <img className={s.notFoundPage} src={notFoundPage} alt="PageNotFoundImage"/>
      <Link to="/" > 
          <ButtonCard title='Go Home'widthBtn="209"/> 
      </Link>
      </div>
  

  )
}
