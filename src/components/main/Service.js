import React from "react";

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faGem, faLaptop, faShuffle, faWifi } from '@fortawesome/free-solid-svg-icons' 

export default function Service() {
  return(
    <section>
      <div className="inner">
        <div className="service-header-text">
          <h2>● SERVICES</h2>
          <p>Explore services <span>→</span></p>
        </div>
        <div className="service-container">
          <div className="icon-box">
            <div className="wrap-icon">
              <FontAwesomeIcon icon={faShuffle} className="font-awesome" />
            </div>
            <p>STRATEGY</p>
            <p>
              Professional Photo Resources is your one stop source for all of your professional photographic imaging needs. Serving working professionals since 1986, PPR is the largest photographic rental house in the southeast.
            </p>
          </div>
          <div className="icon-box">
            <div className="wrap-icon">
              <FontAwesomeIcon icon={faLaptop} className="font-awesome" />
            </div>
            <p>LIQUID IDEA</p>
            <p>
              Looking Glass Photo offers a wide selection of photography equipment for rental including lighting kits, digital SLR outfits, the Nikon CoolScan 5000 slide and film scanner, Nikon D700 & D5000.
            </p>
          </div>
          <div className="icon-box">
            <div className="wrap-icon">
              <FontAwesomeIcon icon={faWifi} className="font-awesome" />
            </div>
            <p>PHOTOGRAPHY</p>
            <p>
              Professional Photo Resources is your one stop source for all of your professional photographic imaging needs. Serving working professionals since 1986, PPR is the largest photographic rental house in the southeast.
            </p>
          </div>
          <div className="icon-box">
            <div className="wrap-icon">
              <FontAwesomeIcon icon={faGem} className="font-awesome" />
            </div>
            <p>MANAGMENT</p>
            <p>
              Our embedded partnership with Google is as deep as it gets. We're the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}