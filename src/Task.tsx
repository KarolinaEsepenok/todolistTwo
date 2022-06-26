import React from 'react';

export  type TaskType = {
    id: number
    title: string
    isDone: boolean
}
type TaskPropsType= TaskType

const Task = (props:TaskPropsType) => {
    return (
        <li >
            <input type={"checkbox"}checked={props.isDone}/>
            <span>{props.title}</span>
        </li>
    );
};

export default Task;