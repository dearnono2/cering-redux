import React from "react"
export default function Footer() {
  return (
    <footer>
      <div className="inner">
        <div className="footer-box">
          <h2>CERING®</h2>
        </div>
        <div className="footer-box">
          <p>We collaborate with ambitious brands and people</p>
        </div>
        <div className="footer-box">
          <p>● STAY IN THE KNOW</p>
          <input type="email" placeholder="EMAIL ADDRESS" />
        </div>
        <div className="footer-box">
          <ul><p>SOCIAL</p>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Facebook</a></li>
          </ul>
          <ul><p>PAGES</p>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <ul><p>OFFICES</p>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkeIn</a></li>
            <li><a href="#">Facebook</a></li>
          </ul>
        </div>
        
      </div>
    </footer>
  )
}