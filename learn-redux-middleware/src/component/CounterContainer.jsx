import React from 'react';
import { connect } from 'react-redux';
import Counter from './Counter';
import { increateAsynce, decreaseAsynce } from '../module/counter';

const CounterContainer = ({number, increateAsynce, decreaseAsynce}) => {
    return (
        <Counter number={number} onIncrease={increateAsynce} onDecrease={decreaseAsynce} />
    );
};

export default connect(
    state => ({
        number: state.counter
    }),
    {
        increateAsynce,
        decreaseAsynce
    }
)(CounterContainer);