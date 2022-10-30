import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useRef } from "react";
import Menu from './Menu';

export default function Header(props) {
  const menu = useRef(null);
  const active = { color : '#A7774B' };

  // let url = '';
  // props.type === 'main'
  //   ? (url = process.env.PUBLIC_URL + '/img/logo_w.png')
  //   : (url = process.env.PUBLIC_URL + '/img/logo_b.png');
    
  return (
    <header className={props.type}>
      <div className="inner">
        <h1>
          <Link to='/'>
            {/* 이미지 로고를 쓰고싶을 경우 url 활성화 */}
            {/* <img src={url} alt="logo" /> */}
            CERING
          </Link>
        </h1>
        <ul id="gnb">
          <li>
            <NavLink to='/about' activeStyle={active}>
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to='/gallery' activeStyle={active}>
              GALLERY
            </NavLink>
          </li>
          <li>
            <NavLink to='/project' activeStyle={active}>
              PROJECT
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' activeStyle={active}>
              CONTACT
            </NavLink>
          </li>
          {/* <li>
            <NavLink to='/community' activeStyle={active}>
              Community
            </NavLink>
          </li>
          <li>
            <NavLink to='/member' activeStyle={active}>
              Member
            </NavLink>
          </li> */}
        </ul>
        {/* toggle 버튼 클릭시 참조된 토글함수 호출 */}
        <FontAwesomeIcon icon={faBars} onClick={() => menu.current.toggle()} />
      </div>

      {/* menu.current에 담기는 값은 자식 컴포넌트에서 useImperativeHandle이 내보내주고 있는 toggle 함수 */}
      <Menu ref={menu} />
    </header>
  )
}

