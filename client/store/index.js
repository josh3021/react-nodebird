import {
  createWrapper
} from 'next-redux-wrapper';
import {
  applyMiddleware,
  compose,
  createStore
} from 'redux';
import {
  composeWithDevTools
} from 'redux-devtools-extension';
import rootReducer from './reducers';


const makeStore = (context) => {
  const middlewares = []; //puts middleware here
  const enhancer = process.env.NODE_ENV === 'production' ?
    compose(applyMiddleware(...middlewares)) :
    composeWithDevTools(
      applyMiddleware(...middlewares)
    );
  const store = createStore(rootReducer, enhancer);
  return store;
}

export default createWrapper(makeStore, {
  debug: true
});
