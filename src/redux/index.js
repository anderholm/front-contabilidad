import {createStore} from 'redux';
import rootReducer from './reducers';


const store = createStore(
  rootReducer,
  {}, // default state of the application
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;