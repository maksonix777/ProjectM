import React from "react";
import s from "./Footer.module.css";
import instagram from "../../media/instagram.png";
import whatsapp from "../../media/whatsapp.png";
import { Link } from "react-router-dom";
import LinkButton from "../GreyButtonLane";

export default function Footer() {
  return (
    <div className="wrapper_All">
      <footer className="wrapper">
        <h2 >Contact</h2>
     


        <div className={s.contact_details}>
            <div className={s.phone}>
                <p className={s.thin}>Phone</p>
                <h3 className={s.bold}>+49 9999 9999 9999</h3>
            </div>

            <div className={s.social}>
              <p className={s.thin}>Socials</p>
              <div className={s.icons}>
              <Link
                to="https://www.instagram.com/startainstitute/"
                target="blank"
              >
                <img className={s.instagram} src={instagram} alt="instagram" />
              </Link>
              <Link
                to="https://www.instagram.com/startainstitute/"
                target="blank"
              >
                <img className={s.whatsApp} src={whatsapp} alt="whatsApp" />
              </Link>
            </div>
         </div>
         <div>
              <p>Adress</p>
              <h3 className={s.bold}>
                Linkstraße 2, 8 OG, 10 785, Berlin, Deutschlan{" "}
              </h3>
            </div>

            <div>
              <p className={s.thin}>Working hours</p>
              <h3 className={s.bold}> 24 hours a day</h3>
            </div>

        

         
        </div>
         <div className={s.map}>
            <iframe
              width="100%"
              height="350"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=1360&amp;height=350&amp;hl=en&amp;q=Tell-Ran.de%20Linkstra%C3%9Fe%C2%A02,%208%C2%A0OG,%20%20Deutschland%20Berlin+(Starta%20Institute)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>

            <script
          type="text/javascript"
          src="https://embedmaps.com/google-maps-authorization/script.js?id=5cc8523dabbd9cad7907fe9282ccd44115cfcb21"
        ></script>
            <p className={s.name}>Maria Kozlova Project</p>
          </div>
      </footer>
    </div>
  );
}
