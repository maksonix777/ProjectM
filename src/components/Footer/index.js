import React from "react";
import s from "./Footer.module.css";
import instagram from "../../ui/instagram.png";
import whatsapp from "../../ui/whatsapp.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="wrapper">
      <footer>
        <p className={s.contact}>Contact</p>
        <div className={s.contact_details}>
          <div className={s.top_footer}>
            <div className={s.phone}>
              <p className={s.thin}>Phone</p>
              <p className={s.bold}>+49 9999 9999 9999</p>
            </div>

            <div className={s.social}>
              <p className={s.thin}>Socials</p>
              <div className={s.icons}>
                <Link to="https://www.instagram.com/startainstitute/" target='blank'>
                  <img
                    className={s.instagram}
                    src={instagram}
                    alt="instagram"
                  />
                </Link>
                <Link to="https://www.instagram.com/startainstitute/" target='blank'>
                  <img className={s.whatsApp} src={whatsapp} alt="whatsApp" />
                </Link>
              </div>
            </div>
          </div>

          <div className={s.bottom_footer}>
            <div className={s.adress}>
              <p className={s.thin}>Adress</p>
              <p className={s.bold}>
                Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland
              </p>
            </div>
            <div className={s.working_hours}>
              <p className={s.thin}>Working hours</p>
              <p className={s.bold}> 24 hours a day</p>
            </div>
          </div>

          <div className={s.map}><iframe width="1440" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=1440&amp;height=350&amp;hl=en&amp;q=Starta%20Institute%20by%20Tel-Ran+(Starta%20Institute%20by%20Tel-Ran)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
        </div>
      </footer>
    </div>
  );
}
