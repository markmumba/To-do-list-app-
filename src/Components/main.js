import React, { Fragment, useState } from "react";

import Navbar from "./Navbar/Navbar";

import Tasks from "./Task/Task";
import Completed from "./Task/Completed";
import ChangeUI from "./Form/ChangeUI";

const Main = () => {

    const [taskList, setTaskList] = useState([]);

    const [completed, setCompleted] = useState([]);

    const [viewComplete,setViewComplete] = useState(false);

    const handleViewComplete = () => {

        setViewComplete( (prevState) =>(!prevState))
    }
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
    return (
        <Fragment>
            <Navbar handleView={handleViewComplete} />
            <div className="grid md:grid-cols-2 pt-20 ">
                {viewComplete && <Completed completed={completed} />}
                {!viewComplete && <ChangeUI addTask={addTasks} />}

                {!viewComplete  && <Tasks tasks={taskList} completeTask={completeTask} removeTask= {removeTask} /> }
            </div>


        </Fragment>
    )
}

export default Main;
