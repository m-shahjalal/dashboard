import { Provider } from 'react-redux';
import store from '../store/store';
import './App.css';

function App() {
	return (
		<Provider store={store} className='App'>
			<h1>shahjalal</h1>
		</Provider>
	);
}

export default App;
