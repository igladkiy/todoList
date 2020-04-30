import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import ReducerForm from './ReducerForm';
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
    ReducerForm,
    form: formReducer
})

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;