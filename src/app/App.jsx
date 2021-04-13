import { Provider } from 'react-redux';
import Panel from '../components/panel/Panel';
import store from '../store/store';
import './App.css';
import AppRouter from './Route';

function App() {
	return (
		<Provider store={store} className='App'>
			<AppRouter />
		</Provider>
	);
}

export default App;
