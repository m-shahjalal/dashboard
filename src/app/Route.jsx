import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Achievement from '../pages/Achievement';
import HomePage from '../pages/HomePage';
import CoursePage from '../pages/CoursePage';
import DashboardPage from '../pages/DashboardPage';
import ForumPage from '../pages/ForumPage';
import Panel from '../components/panel/Panel';

const AppRouter = () => {
	return (
		<Router>
			<Panel />
			<Switch>
				<Route path='/achievement' component={Achievement} />
				<Route path='/course' component={CoursePage} />
				<Route path='/dashboard' component={DashboardPage} />
				<route path='/forum' component={ForumPage} />
				<Route exact path='/' component={HomePage} />
			</Switch>
		</Router>
	);
};

export default AppRouter;
