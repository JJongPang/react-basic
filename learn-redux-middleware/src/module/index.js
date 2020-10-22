import { combineReducers } from 'redux';
import counter from './counter';
import sample from './sample';

const rootReaducer = combineReducers({
    counter,
    sample
});

export default rootReaducer;