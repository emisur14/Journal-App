import {createStore, combineReducers} from 'redux';
import { authReducer } from '../reducers/authReducer';


const redurces = combineReducers({
    auth: authReducer
});

export const store = createStore(
    redurces,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );