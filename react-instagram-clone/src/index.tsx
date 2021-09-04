import ReactDOM from 'react-dom';
import { App } from './App';
import FirebaseContext from './context/firebase-context';
import { firebase } from './configuration/firebase-config';

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
