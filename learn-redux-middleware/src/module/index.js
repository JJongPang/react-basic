import { combineReducers } from 'redux';
import counter from './counter';

const rootReaducer = combineReducers({
    counter
});

export default rootReaducer;