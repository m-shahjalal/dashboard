import { Provider } from 'react-redux';
import store from '../store/store';
import './reset.css';
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
