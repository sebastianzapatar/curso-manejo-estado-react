
import './App.css';
import { Provider } from 'react-redux';
import { Login } from './components/Login';
import store from './redux/store';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Login/>
      </Provider>
    </div>
  );
}

export default App;
