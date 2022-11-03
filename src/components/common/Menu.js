import { useState, forwardRef, useImperativeHandle } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom'; 
import { useEffect } from 'react';


// Menu 컴포넌트를 화살표함수로 변경해서 forwardRef 메서드의 인수로 전달.
const Menu = forwardRef((props, ref) => {
  const [Open, setOpen] = useState(false);
  const active = { color: 'orange' };

  useEffect(() => {
    window.addEventListener('resize', () => {
      const wid = window.innerWidth;
      if(wid >= 1200) setOpen(false);
    })
  }, [])

  // 부모 컴포넌트의 참조객체에 담길 객체를 리턴 (해당 객체 안에는 함수를 담아서 전달)
  useImperativeHandle(ref, () => {
    return {
      toggle: () => setOpen(!Open)
    }
  })
  return(
    <AnimatePresence>
      {Open && (
        <motion.nav 
        id='mobileMenu'
        initial={{ opacity: 0, x: -320 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5 }}}
        exit={{ opacity: 0, x: -320, transition: { duration: 0.5 }}}
        onClick={() => setOpen(false)}
        >
          <h1>
            <Link to='/'>
              {/* <img src={process.env.PUBLIC_URL+'/img/logo_w.png'} alt="logo" /> */}
              CERING
            </Link>
          </h1>
          <ul id="gnb">
            <li>
              <NavLink to='/about' activeStyle={active}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to='/gallery' activeStyle={active}>
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to='/project' activeStyle={active}>
                Project
              </NavLink>
            </li>
            <li>
              <NavLink to='/contact' activeStyle={active}>
                Contact
              </NavLink>
            </li>
            <li>
              {/* ◀ */}
            </li>
          </ul>
      </motion.nav>
      )}
    </AnimatePresence>
  );
})

export default Menu;