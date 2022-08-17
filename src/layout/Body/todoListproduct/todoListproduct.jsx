import React, { useCallback, useEffect, useState } from 'react';
import TodoItemProduct from '../../../components/todoIItemProduct/todoItemProduct';
import "./styles.scss"

import { observer } from "mobx-react";
import todoStores from '../../../todoStore/todoStore';


const TodoListproduct = props => {
    
    return (
        <div className='listProduct'>
            {
                    props.dataProuct && props.dataProuct.map((item,index)=>(
                        <TodoItemProduct item={item} key={index}/>
                    ))
                
            }
        </div>
    );
};


export default observer(TodoListproduct);