import React from 'react';

type PropsType = {
    title: string
    tasks: Array<TaskType>
}
type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export const Todolist=(props: PropsType)=> {
    return (
        <div>
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {props.tasks.map((task) => {
                            return (
                                <li key={task.id}><input type={"checkbox"}checked={task.isDone}/><span>{task.title}</span></li>
                            )
                        }
                    )}</ul>
                    <div>
                        <button>All</button>
                        <button>Active</button>
                        <button>Completed</button>
                    </div>
            </div>
        </div>
);

}
