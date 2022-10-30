import { Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setYoutube, setMembers } from './redux/actionType';
import axios from 'axios';

//common
import Header from './components/common/Header';
import Footer from './components/common/Footer';



//main
import Main from './components/main/Main';


//sub
import Community from './components/sub/Community';
import Member from './components/sub/Member';

import About from './components/sub/About';
import Gallery from './components/sub/Gallery';
import Contact from './components/sub/Contact';
import Project from './components/sub/Project';
import * as types from './redux/actionType';

import './scss/style.scss';
function App() {
	const dispatch = useDispatch();


	useEffect(() => {
		dispatch({ type: types.MEMBERS.start })
		dispatch({ type: types.YOUTUBE.start })
		dispatch({ type: types.FLICKR.start, Opt: { type: 'user', user: '196712274@N08' }})
  }, []);

	return (
		<>
			{/* Switch는 같은 경로의 라우터 연결시 구체적인 라우터 하나만 적용한다. */}
			<Switch>
				<Route exact path='/' component={Main} />
				<Route path='/' render={() => <Header type={'sub'} />} />
			</Switch>


			<Route path='/about' component={About} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/project' component={Project} />
			<Route path='/contact' component={Contact} />

			<Route path='/community' component={Community} />
			<Route path='/member' component={Member} />
			


			<Footer />

		</>

	);
}

export default App;
