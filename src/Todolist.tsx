import React from 'react';
import Header from "./Header";
import TasksList from "./TasksList";
import Button from "./Button";
type TodolistPropsType={
    title:string
    tasks: TaskType[]
}
export type TaskType={
    id: number
    title:string
    isDone:boolean
}

export const Todolist = (props:TodolistPropsType) => {
    return (
        <div>
            <div>
                <Header title={props.title}/>
                <div>
                    <input/>
                    <Button titleBtn={'+'}/>
                </div>
                <TasksList tasks={props.tasks} />
                <Button titleBtn={'All'} />
                <Button titleBtn={'completed'}/>
                <Button titleBtn={'uncompleted'} />
        </div>
</div>

)


}

