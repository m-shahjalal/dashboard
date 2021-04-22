import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useSize from '../hooks/useWindowSize';
import Achievement from '../pages/Achievement';
import HomePage from '../pages/HomePage';
import CoursePage from '../pages/CoursePage';
import DashboardPage from '../pages/DashboardPage';
import ForumPage from '../pages/ForumPage';
import Panel from '../components/panel/Panel';

import './App.css';
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';
import Hamburger from '../components/hamburger/Hamburger';

const AppRouter = () => {
	const { width } = useSize();
	console.log('width ' + width);
	return (
		<Router>
			<Nav />
			<div className='container'>
				<div className='column1'>
					{width >= 960 ? <Panel /> : <Hamburger />}
				</div>
				<div className='column2'>
					<Switch>
						<Route path='/achievement' component={Achievement} />
						<Route path='/course' component={CoursePage} />
						<Route path='/dashboard' component={DashboardPage} />
						<Route path='/forum' component={ForumPage} />
						<Route exact path='/' component={HomePage} />
					</Switch>
					<Footer />
				</div>
			</div>
		</Router>
	);
};

export default AppRouter;
