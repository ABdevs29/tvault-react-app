import { createStore, combineReducers } from 'redux';

import reducer from './reducer';

const allReducers = combineReducers({safesList: reducer});

const store = createStore(allReducers);


export default store;