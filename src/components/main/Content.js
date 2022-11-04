import React, { useEffect } from "react"
import { useRef } from 'react';

export default function Content() {


  return (
    <section>
      <div className="inner b-line">
        <h2>● ABOUT</h2>
        <div className="about-content">
          <div className="about-content-left">
            <p>CERING</p>
            <div className="circle-effect">
              <div className="img">
                <img src="https://img.icons8.com/dotty/80/000000/compact-camera.png"/>
              </div>
              <div className="text">
                <p>CERING ● CREATIVE AGENCY</p>
              </div>
            </div>
          </div>
          <div className="about-content-right">
            <p>
              Cering was founded in 2006 by Jamie Stephen who still runs the agency today. A former new business director for a global advertising network with connections throughout the industry, he created an agency designed around the needs of clients across the world. Now representing over 50 artists and with a team of 15 Australioa
            </p>
            <button>LEARN MORE</button>
          </div>
        </div>
        <div className="about-brands-logo">
          <div className="wrap-logo">
            <img src="https://img.icons8.com/windows/100/000000/wix.png"/>
          </div>
          <div className="wrap-logo">
          <img src="https://img.icons8.com/dotty/100/000000/yolo.png"/>
          </div>
          <div className="wrap-logo">
            <img src="https://img.icons8.com/windows/100/000000/ember.png"/>
          </div>
          <div className="wrap-logo">
            <img src="https://img.icons8.com/ios/100/000000/audible.png"/>
          </div>
          <div className="wrap-logo">
            <img src="https://img.icons8.com/ios-filled/100/000000/the-beatles.png"/>
          </div>
        </div>
      </div>
    </section>
  )
}