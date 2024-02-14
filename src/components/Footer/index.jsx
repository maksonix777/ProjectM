import React from "react";
import s from "./Footer.module.css";
import instagram from "../../media/instagram.png";
import whatsapp from "../../media/whatsapp.png";
import { Link } from "react-router-dom";
import LinkButton from "../GreyButtonLane";

export default function Footer() {
  return (
    <div className="wrapper">
      <footer>
        <h2 className={s.contact}>Contact</h2>
     


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
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=1440&amp;height=350&amp;hl=en&amp;q=Starta%20Institute%20by%20Tel-Ran+(Starta%20Institute%20by%20Tel-Ran)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            <p className={s.name}>Maria Kozlova Project</p>
          </div>
      </footer>
    </div>
  );
}
