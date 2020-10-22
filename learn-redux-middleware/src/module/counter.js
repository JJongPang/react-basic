import { createAction, handleAction, handleActions } from 'redux-actions';

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

//1초 뒤에 increate 혹은 decrease 함수를 디스패치함
export const increateAsynce = () => dispatch => {
    setTimeout(() => {
        dispatch(increase());
    }, 1000);
};

export const decreaseAsynce = () => dispatch => {
    setTimeout(() => {
        dispatch(decrease());
    }, 1000);
}

const initialState = 0;

const counter = handleActions(
    {
        [INCREASE]: state => state + 1,
        [DECREASE]: state => state - 1
    },
    initialState
)

export default counter;