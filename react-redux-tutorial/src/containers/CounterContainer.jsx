import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from '../components/Counter';
import { decrease, increase } from './modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    );
};

// const mapStateToProps = state => ({
//     number: state.counter.number,
// });

// const mapDispatchToProps = dispatch => ({
//     //임시함수
//     increase: () => {
//         console.log('increase');
//         dispatch(increase());
//     },
//     decrease: () => {
//         console.log('decrease');
//         dispatch(decrease());
//     }
// });

export default connect(
    state => ({
        number: state.counter.number,
    }),
    dispatch => 
        bindActionCreators(
            {
                increase,
                decrease,
            },
            dispatch,
        ),
)(CounterContainer);