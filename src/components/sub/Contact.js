import { useEffect, useRef, useState } from "react";
import Layout from "../common/Layout"
import { useHistory } from 'react-router-dom';

export default function Contact() {

  // 
  // 이메일, 남기는 말 유효성 검사
  // 
  const history = useHistory();

  const initVal = {
    email: '',
    comments: '',
  };
  // 해당 객체 값을 state에 초기값으로 저장
  const [Val, setVal] = useState(initVal);

  const [Err, setErr] = useState({});

  const [Submit, setSubmit] = useState(false);

  const check = (value) => {
    const errs = {};

    // email 인증은 8글자 이상, @가 있어야 한다.
    if(value.email.length < 8 || !/@/.test(Val.email)) {
      errs.email = '이메일은 8글자 이상 @를 포함하세요'
    }

    if(Val.comments.length < 20) {
      errs.comments = '남기는 말을 20글자 이상 입력하세요';
    }

    return errs;
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal({ ...Val, [name]: value });
  }

  const handleRadio = (e) => {
    const {name} = e.target;
    const isChecked = e.target.checked;
    setVal({...Val, [name]: isChecked})
  }

  const handleSelect = (e) => {
    const {name} = e.target;
    const isSelected = e.target.value;
    setVal({...Val, [name]: isSelected });
  }

  const handleCheck = (e) => {
    let isChecked = false;
    const { name } = e.target;
    const inputs = e.target.parentElement.querySelectorAll('input');
    inputs.forEach((el) => {
      if(el.checked) isChecked = true;
    });
    setVal({...Val, [name]: isChecked });
  }

  const handleReset = () => {
    setSubmit(false);
    setErr({});
    setVal(initVal);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr(check(Val));
  };

  useEffect(() => {
    const len = Object.keys(Err).length;
    if(len === 0 && Submit) {
      alert('전송 완료하였습니다. 메인페이지로 이동합니다.');
      history.push('/');
    }
  }, [Err]);



  //
  // 카카오 지도
  //

  const { kakao } = window;
  // 윈도우 객체가 카카오 객체를 사용할 수 있도록 하는 코드.
  // const kakao = (window).kakao;

  const info = [
    {
      title: 'COEX',
      latlng: new kakao.maps.LatLng(37.5116828, 127.059151),
      imgUrl: `${process.env.PUBLIC_URL}/img/marker.png`,
      imgSize: new kakao.maps.Size(64, 65),
      imgPos: { offset: new kakao.maps.Point(32, 65) }
      // offset 이미지 위치 = 이미지 원사이즈 값의 반, 이미지 원사이즈 값
    },
    {
      title: 'SINSA',
      latlng: new kakao.maps.LatLng(37.5161251, 127.0213834),
      imgUrl: `${process.env.PUBLIC_URL}/img/marker.png`,
      imgSize: new kakao.maps.Size(64, 65),
      imgPos: { offset: new kakao.maps.Point(32, 99) }
    },
  ];



  // 리얼돔에서 참조하는 방법으로 querySelector 등의 방법은 가상돔인 리액트에서는 사용할 수 없다. 그래서 리액트에서는 useRef라는 훅을 이용해서 가상으로 생성된 DOM을 이용할 수 있다.
  const container = useRef(null);
  // useRef를 이용해서 가상돔을 참조할 변수로 컨테이너를 생성한 뒤, null 값으로 빈 구역을 만들어둠.
  const btns = useRef(null);

  const [Location, setLocation] = useState(null);
  // useEffect에서 만들어진 지도 인스턴스를 담을 state를 생성하는 것

  const [Traffic, setTraffic] = useState(false);
  // Traffic 토글 기능 구현을 위한 state를 추가, 불린값을 부여한다.

  const [Info] = useState(info);
  // setInfo는 info가 바뀔 일이 없으므로 필요가 없다.

  const [Index, setIndex] = useState(0);
  // 인덱스가 변화될 때 렌더링이 필요하므로 useState에 담아 관리한다.
  
  const option = { //지도를 생성할 때 필요한 기본 옵션
    center: Info[Index].latlng, //지도의 중심좌표.
    level: 3 //지도의 레벨(확대, 축소 정도)
  };
  const markerPosition  = Info[Index].latlng; // 마커위치 인스턴스 생성
  const imageSrc = Info[Index].imgUrl;
  const imageSize = Info[Index].imgSize;
  const imageOption = Info[Index].imgPos;
  // 마커 이미지 변경에 필요한 정보값 3개를 등록

  const markerImage = new kakao.maps.MarkerImage(
    imageSrc,
    imageSize,
    imageOption
  );

  const marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage
  });
  // 위치 인스턴스 값을 인수로 전달해서 다시 마커 인스턴스 생성

  
  useEffect(() => {
    container.current.innerHTML = '';

    // 지도 인스턴스 최종생성
    const map_instance = new kakao.maps.Map(container.current, option); //지도 인스턴스를 활용해서 마커를 생성하는 코드
    marker.setMap(map_instance);
    setLocation(map_instance);

    const mapTypeControl = new kakao.maps.MapTypeControl();
    map_instance.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    const zoomControl = new kakao.maps.ZoomControl();
    map_instance.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    for(const btn of btns.current.children) btn.classList.remove('on');
    btns.current.children[Index].classList.add('on');


    window.addEventListener('resize', () => {
      map_instance.setCenter(Info[Index].latlng);
    })
  }, [Index]); // <-- 기존 컴포넌트가 처음 마운트 되었을 때만 지도를 출력하던 방식에서, Index가 변경될 때 지도가 다시 렌더링 하는 방식으로 바꿈.


  // 트래픽 토글 전용 useEffect 
  useEffect(() => {
    if(!Location) return;
    // Location state의 값은 두번째 호출부터 값이 담겨 사이클이 돌아가므로 처음 값이 존재하지 않는 초기 오류방지를 위해 조건문 처리함.

    // 트레픽 값에 따라서 생성과 삭제로 나누어서 코드를 제공, 구현.
    Traffic 
    ? Location.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
    : Location.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC) 

  }, [Traffic]); // traffic state의 값이 변경될 때마다 실행이 되는 구문.


  return (
    <Layout name={'Contact'}>
      <div className="inner">
        <h2>● CONTACT US</h2>
        {/* form and img section */}
        <div className="contact-section">
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <fieldset>
                <table>
                  <tbody>
                    {/* email */}
                    <tr>
                      <th scope='row'>
                        <label htmlFor="email">◆ E-MAIL</label>
                      </th>
                      <td>
                        <input type="text"
                                id='email'
                                name='email'
                                placeholder='EMAIL ADDRESS*'
                                value={Val.email}
                                onChange={handleChange}
                        />
                        <span className='err'>{Err.email}</span>
                      </td>
                    </tr>
                    {/* comments */}
                    <tr>
                      <th scope='row'>
                        <label htmlFor="comments">◆ COMMENTS</label>
                      </th>
                      <td>
                        <textarea 
                        name="comments" 
                        id="comments" 
                        placeholder="MESSAGE"
                        cols="30" 
                        rows="5"
                        value={Val.comments}
                        onChange={handleChange}
                        ></textarea>
                        <span className="err">{Err.comments}</span>
                      </td>
                    </tr>

                    {/* btn set */}
                    <tr>
                      <th colSpan='2'>
                        <input 
                        type="reset" 
                        value="CANCLE"
                        onClick={handleReset}
                        />
                        <input 
                        type="submit" 
                        value="SEND"
                        onClick={() => setSubmit(true)} 
                        />
                        </th>
                    </tr>
                  </tbody>
                </table>
              </fieldset>
            </form>
          </div>
          <div className="contact-img">
            <img src={process.env.PUBLIC_URL + '/img/contact.jpg'} alt="phonecall img" />
          </div>
        </div>
        <div className="flow-section">
          <div className="flow-imgs">
            <div className="flow-img">flow 요소 추가할 예정</div>
          </div>
        </div>
        {/* map section */}
        <h2 className="map-h2">● LOCATION</h2>
        <div className="map-section">
          {/* left - kakao map */}
          <div className="kakao-map">
            <div id="map" ref={container}></div>
            <div className="btnSet">
              {/* 기존의 두개의 버튼에서 한개의 토글 버튼으로 바꿈.
                  버튼 클릭시 트래픽 값을 반전처리 => !Traffic
              */}
              <button onClick={() => { setTraffic(!Traffic) }
              }>
                {/* Traffic의 값에 따라서 버튼의 내용도 변경 */}
              { Traffic ? 'Traffic OFF' : 'Traffic ON'}
              </button>

              <ul className="branch" ref={btns}>
                {/* 각 버튼을 클릭할 때마다 Index의 값을 변경 */}
                {
                  Info.map((el, idx) => {
                    return(
                      <li key={idx} onClick={() => setIndex(idx)}>
                        {el.title}
                      </li>
                    );
                  })
                }
              </ul>
            </div>
          </div>
          {/* right - location guide text */}
          <div className="location-guide">
            <div className="location-guide-address">
              <h3>ADDRESS</h3>
              <h4>HEAD OFFICE / SINSA</h4>
              <p>
                8 Dosan-daero 6-gil, Gangnam-gu, Seoul, Republic of Korea
              </p>
              <h4>BRANCH OFFICE / COEX SAMSUNG</h4>
              <p>
                513, Yeongdong-daero, Gangnam-gu, Seoul, Republic of Korea
              </p>
            </div>
            <div className="location-guide-information">
            {/* contact guide */}
              <div className="guide-section">
                <div className="guide-section-left">
                  <p>NEW BUSINESS & GENERAL</p>
                  <p><a href="#">+82-12-1234-5678</a></p>
                  <p><a href="#">INFO@CERING.COM</a></p>
                </div>
                <div className="guide-section-right">
                  <h3>◀ GET IN TOUCH!</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </Layout>
  );
}

