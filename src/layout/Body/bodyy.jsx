import React from 'react';
import PropTypes from 'prop-types';
import TodoListproduct from './todoListproduct/todoListproduct';
import "./styles.scss";
import todoStores from '../../todoStore/todoStore';
import TodoItemProduct from '../../components/todoIItemProduct/todoItemProduct';
import { observer } from "mobx-react";

const Body = props => {
    const {data}  = props;
    return (
        <div className='main'>
            <p className='main__total'>Total : <span className='main__number'>{todoStores.count}</span></p>
            <TodoListproduct dataProuct={data}/>
        </div>
    );
};



export default observer(Body);