import { combineReducers } from 'redux';
import counter from './counter';
import sample from './sample';
import loading from './loading';

const rootReaducer = combineReducers({
    counter,
    sample,
    loading,
});

export default rootReaducer;