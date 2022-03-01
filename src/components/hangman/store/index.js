import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const initialStore = {

};

let middleware = [thunk];

const store = createStore(rootReducer, initialStore, applyMiddleware(...middleware));

export default store;
