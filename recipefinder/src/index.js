import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
  <Router>
		<div className='app'>
    	<App />
		</div>
  </Router>, document.getElementById('root'));










// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>, document.getElementById('root')); 








// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// // import { createStore } from 'redux';
// // import { Provider } from 'react-redux';
// // import allReducers from './reducers/allReducers';
//
// // import 'semantic-ui-css/semantic.min.css';
//
// let store = createStore(allReducers)
//
// ReactDOM.render(
//     <Provider store={store}>
//     	<App />
//     </Provider>,
//     document.getElementById('root')
// );
//
// serviceWorker.unregister();
