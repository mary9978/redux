import './App.css';
import CakeContainer from './component/CakeContainer';
import store from './Redux/store';
import { Provider } from 'react-redux';
function App() {
  return (
   <Provider store={store}>
    <CakeContainer/>
   </Provider>
  );
}

export default App;
