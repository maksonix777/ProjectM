import React from "react";
import notFoundPage from "../../media/404.png";
import s from "./NotFoundPage.module.css";
import { Link } from "react-router-dom";
import ButtonCard from "../../ui/Buttons/ButtonCard";

export default function NotFoundPage() {
  return (
    <div className={s.notFoundPageContainer}> NotFoundPage
      <div className={s.notFoundContainer}> 
      <img className={s.notFoundPage} src={notFoundPage} alt="PageNotFoundImage"/>
      </div>

      <h2>Page Not Found</h2>

      <p>We’re sorry, the page you requested could not be found. </p>
      <p> Please go back to the homepage.</p>

      <Link to="/">
        <ButtonCard title="Go Home" widthBtn="209" />
      </Link>
    </div>
  );
}
