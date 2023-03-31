import React, { Fragment, useState } from "react";

import Forms from "./Form/Form";
import Tasks from "./Task/Task";
import Completed from "./Task/Completed";

const Main = () => {

    const [taskList, setTaskList] = useState([]);

    const [completed, setCompleted] = useState([]);

    const addTasks = (task) => {
        setTaskList([...taskList, task])
    }

    const completeTask = (id) => {

        const taskToDelete = taskList.find(task => task.id === id);

        if (taskToDelete) {
            setCompleted([...completed, taskToDelete]);
            setTaskList(taskList.filter(task => task.id !== id));
        }

    }
    const removeTask = (id) => {
        setTaskList(taskList.filter(task => task.id !== id));
    }
    console.log(taskList)
    return (
        <Fragment>
            <div className="basis-1/2 ">
                <Forms addTask={addTasks} />
                <Completed completed={completed} />
            </div>
            <div className="basis-1/2">
                <Tasks tasks={taskList} completeTask={completeTask} removeTask= {removeTask} />
            </div>

        </Fragment>
    )
}

export default Main;
