import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar';
import Question from './components/Question';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />

        <div className="container">
          <Question />
        </div>
      </div>
    </Provider>
  );
}

export default App;
