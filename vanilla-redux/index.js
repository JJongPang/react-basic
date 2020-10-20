const { createStore } = require("redux");

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#toggle');

//액션 타입과 액션 생성 함수 정의
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const toogleSwitch = () => ({type: TOGGLE_SWITCH});
const increase = () => ({type: INCREASE, defference});
const decrease = () => ({type:DECREASE});

//초기값 설정
const initialState = {
    toogle: false,
    counter: 0
};

//리듀서 함수 정의
//state가 undefined일 때는 initialState를 기본값으로 사용
function reducer(state = initialState, action) {
    //action.type에 따라 다른 작업을 처리함
    switch(action.type) {
        case TOGGLE_SWITCH:
            return {
                ...state, //불변성 유지를 해 주어야 합니다.
                toggle: !state.toggle
            };
        case INCREASE:
            return {
                ...state,
                counter: state.counter + action.difference
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            };
        default:
            return state;    
    }
}

//스토어 만들기
const store = createStore(reducer);

//render 함수 만들기 이 함수는 상태가 업데이트될 때만다 호출
const render = () => {
    const state = store.getState()// 현재 삳태를 불러 옵니다.
    //토글처리
    if(state.toogle) {
        divToggle.classList.add('active');
    }else {
        divToggle.classList.remove('active');
    }
    //카운터 처리
    counter.innerText = state.counter;
}
render();

//구독하기
store.subscribe(render);

//액션 발생시키기 (디스패치)
divToggle.onclick = () => {
    store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
    store.despatch(increase(1));
};
btnDecrease.onclick = () => {
    store.dispatch(decrease());
};

