import Layout from "../common/Layout";
import { useSelector } from "react-redux";

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function About() {



  const path = process.env.PUBLIC_URL;

  const Members = useSelector((store) => store.memberReducer.members)


  return (
    // 최상단 영역
    <Layout name={'About'}>
      <div className="inner">
        <h2>● CRAFTING DIGITAL EXPERIENCES</h2>
      </div>
      <section className="sub-visual">
        <div className="coworker-pic">
          <img src={process.env.PUBLIC_URL + '/img/coworker.jpg'} alt="coworker picture" />
        </div>
      </section>
      {/* about 영역 */}
      <section id="about">
        <div className="inner">
          <h2>● ABOUT</h2>
            <div className="about-content">
              <div className="about-content-left">
                <p>CERING</p>
                <p>C</p>
              </div>
              <div className="about-content-right">
                <p>
                  Cering was founded in 2006 by Jamie Stephen who still runs the agency today. A former new business director for a global advertising network with connections throughout the industry, he created an agency designed around the needs of clients across the world. Now representing over 50 artists and with a team of 15 Australioa
                </p>
                <button>LEARN MORE</button>
              </div>
            </div>
        </div>
        {/* simple introduce boxes */}
        <div className="simple-about-box">
          <div className="simple-box">
            <p>200</p>
            <p>VISUALISATION</p>
          </div>
          <div className="simple-box">
            <p>7</p>
            <p>YEARS EXPERIENCE</p>
          </div>
          <div className="simple-box">
            <p>32</p>
            <p>AWWARDS</p>
          </div>
          <div className="simple-box">
            <p>16</p>
            <p>PHOTOGRAPHERS</p>
          </div>
        </div>
      </section>
      {/* team 영역 */}
      <section id="team">
        <div className="inner">
          <h2>● team</h2>
          {/* 부서 멤버들의 정보를 받아옴. */}
          <div className="department">
            {Members.map((data, index) => {
                return (
                  <article key={index}>
                      <div className="wrap-members">
                          <div className="pic">
                              <img src={`${path}/img/${data.pic}`} alt={data.name} />
                          </div>
                          <div className="wrap-members-text">
                            <h3>{data.name}</h3>
                            <div className="wrap-icon">
                              <a href="#"><FontAwesomeIcon icon={faFacebookF} className="font-awesome" /></a>
                              <a href="#"><FontAwesomeIcon icon={faTwitter} className="font-awesome" /></a>
                              <a href="#"><FontAwesomeIcon icon={faInstagram} className="font-awesome" /></a>
                            </div>
                          </div>
                      </div>
                  </article>
                );
              })}
          </div>
        </div>
      </section>
    </Layout>
  )
}