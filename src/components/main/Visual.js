export default function Visual() {
  return (
      <figure id="visual" className='myScroll'>
        <div className="inner">
          {/* visual의 텍스트 부분 */}
          <div className="text-box">
            <div className="text-box-left">
              <h2>●<p>BRAND RECOGNITION</p></h2>
              <div className="mini-text-box">
                <p>Photography</p>
                <p>See project</p>
              </div>
            </div>
            <div className="text-box-right">
              <p>2022</p>
              <p>● NEXT</p>
            </div>
          </div>
          {/* visual의 이미지 부분 */}
          <div className="img-box">
            <img src={process.env.PUBLIC_URL + '/img/visual.jpg'} alt="main image" />
          </div>
        </div>
      </figure>
  )
}
