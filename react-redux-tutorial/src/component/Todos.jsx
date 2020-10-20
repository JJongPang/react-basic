import React from 'react';

const ToItem = ({ todo, onToggle, onRemove }) => {
    return (
        <div>
            <input type='chekbox' />
            <span>에제 텍스트</span>
            <button>삭제</button>
        </div>
    );
};

const Todos =({
    input,
    todos,
    onChangeInput,
    onInsert,
    onToggle,
    onRemove,
}) => {
    const onSubmit = e =>{
        e.preventDefault();
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input />
                <button type="submit">등록</button>
            </form>
            <div>
                <ToItem />
                <ToItem />
                <ToItem />
                <ToItem />
                <ToItem />
                <ToItem />
            </div>
        </div>
    )
}

export default Todos;