import React from 'react'
import notFoundPage from '../../ui/notfoundpage.jpg'
import s from "./NotFoundPage.module.css" 
import { Link } from 'react-router-dom'

export default function NorFoundPage() {
  return (
    
    <div className={s.notFoundPageContainer}>NotFoundPage
      <img className={s.notFoundPage} src={notFoundPage} alt="PageNotFoundImage"/>
      <Link to="/MainPage" > <button className={s.goHome_btn}>Go home</button></Link>
     
    
    </div>
  

  )
}
