import { createStore, combineReducers } from 'redux';
import counterGroupReducer from '../reducer/counterGroupReducer';

const rootReducer = combineReducers({
    counterGroupReducer
});

const store = createStore(rootReducer);

export default store;