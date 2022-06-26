import React from 'react';
import Task from "./Task";
import {TaskType} from "./Task";

export type PropsTasksListType = {
    tasks: Array<TaskType>
}
const TasksList = (props: PropsTasksListType) => {
    const tasksComponents = props.tasks.map((task) => {
            return (
                <Task
                    key={task.id}
                    title={task.title}
                    id={task.id}
                    isDone={task.isDone}
                />
            )
        }
    )
    return (
        <div>
            <ul>
                {tasksComponents}
            </ul>
        </div>
    );
};

export default TasksList;