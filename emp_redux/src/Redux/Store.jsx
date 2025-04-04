import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'
import EmpReducer from './EmpReducer';
import { loadState, saveState } from '../Utils/localstorage';

let employeData = loadState();


const store = createStore(combineReducers({ 
    employee: EmpReducer 
}),employeData,applyMiddleware(thunk));

store.subscribe(()=>{
    saveState(store.getState())
})
export default store;